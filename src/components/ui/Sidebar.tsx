import {BiFullscreen} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import {MdOutlineSwapVert} from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import {IChannel} from "@/types/IChannel";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChannels, addSelectedChannel, deleteSelectedChannel } from "@/stores/selectedChannels";
import { addUnselectedChannel, deleteUnselectedChannel } from "@/stores/unselectedChannels";

export default function Sidebar({ isSidebarOpen, setSidebarOpen }: any) {

    const dispatch = useDispatch()
    const selectedChannels: IChannel[] = useSelector((state: any)=> state.selectedChannels.selectedChannels)
    const unselectedChannels: IChannel[] = useSelector((state: any) => state.unselectedChannels.unselectedChannels)


    async function handleFullScreen() {
        if (document.fullscreenElement) {
            await document.exitFullscreen()
        } else {
            await document.body.requestFullscreen()
        }
    }

    function handleChannel(channel: IChannel, destinationList: string) {
        if (destinationList === "selected") {
            dispatch(addSelectedChannel(channel))
            dispatch(deleteUnselectedChannel(channel.id))
        }

        if (destinationList === "unselected") {
            dispatch(addUnselectedChannel(channel))
            dispatch(deleteSelectedChannel(channel.id))
        } 
    }

    return (
        <div className={`p-6 bg-[#2D2727] text-white h-full w-[400px] fixed text-lg overflow-y-auto z-10 transition-all ${isSidebarOpen ? "-translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between">
                <h1>Gösterilen Kanallar ({selectedChannels.length})</h1>
                <div className="flex items-center gap-4">
                    <button onClick={handleFullScreen}><BiFullscreen className="text-gray-400 hover:text-[#D8D8D8]" size={32}/></button>
                    <button onClick={() => setSidebarOpen(false)}><AiOutlineClose className="text-gray-400 hover:text-[#D8D8D8]" size={32}/></button>
                </div>
            </div>

            <div className="grid gap-y-8">
                <div className="mt-4">
                    <DragDropContext onDragEnd={(result) => {
                        if (!result.destination) return

                        const sourceIndex = result.source.index
                        const destinationIndex = result.destination.index
                        const newSelectedChannels = [...selectedChannels]
                        newSelectedChannels.splice(destinationIndex, 0, newSelectedChannels.splice(sourceIndex, 1)[0])

                        dispatch(setSelectedChannels(newSelectedChannels))
                    }}>
                        <Droppable droppableId="droppable-1">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="grid gap-y-2">
                                    {selectedChannels.map((channel: IChannel, index: number) => (
                                        <Draggable key={channel.id} draggableId={`draggable-${channel.id}`} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
                                                    <div className="flex items-center h-full w-full">
                                                        <button {...provided.dragHandleProps} className="bg-[#F0EB8D] h-full px-4"><MdOutlineSwapVert /></button>
                                                        <h2 className="bg-white flex items-center h-full w-full pl-4">{channel.title}</h2>
                                                    </div>
                                                    <button className="bg-[#F0EB8D] h-full px-4" onClick={() => handleChannel(channel, "unselected")}>Drop</button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

                <div className="grid gap-y-4">
                    <h1>Gösterilmeyen Kanallar ({unselectedChannels.length})</h1>
                    <div className="grid gap-y-2">
                        {unselectedChannels.map((channel: IChannel) => (
                            <div key={channel.id} className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
                                <div className="flex items-center h-full w-full">
                                    <button className="bg-[#F0EB8D] h-full px-4 cursor-default"><GrChannel /></button>
                                    <h2 className="bg-white flex items-center h-full w-full pl-4">{channel.title}</h2>
                                </div>
                                <button className="bg-[#F0EB8D] h-full px-4" onClick={() => handleChannel(channel, "selected")}>Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}