import { BiFullscreen } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineSwapVert } from "react-icons/md"
import {IChannel} from "@/types/IChannel";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Sidebar({ selectedChannels, setSelectedChannels, unselectedChannels, setUnselectedChannels, isSidebarOpen, setSidebarOpen }: any) {
    const handleFullScreen = async () => {
        if (document.fullscreenElement) {
            await document.exitFullscreen()
        } else {
            await document.body.requestFullscreen()
        }
    }

    const handleChannel = (channel: IChannel) => {
        if (channel.isSelected === false) {
            channel.isSelected = true
            setUnselectedChannels(unselectedChannels.filter((channel: IChannel) => !channel.isSelected))
            setSelectedChannels([
                ...selectedChannels,
                channel
            ])
        } else {
            channel.isSelected = false
            setSelectedChannels(selectedChannels.filter((channel: IChannel) => channel.isSelected))
            setUnselectedChannels([
                ...unselectedChannels,
                channel
            ])
        }
    }

    return (
        <div className={`p-6 bg-[#2D2727] text-white h-screen w-[400px] absolute text-lg overflow-y-auto z-10 transition-all ${isSidebarOpen ? "-translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between">
                <h1>Mantenna | Kanallar ({selectedChannels.length})</h1>
                <div className="flex items-center gap-4">
                    <button onClick={handleFullScreen}><BiFullscreen className="text-gray-400 hover:text-[#D8D8D8]" size={32}/></button>
                    <button onClick={() => setSidebarOpen(false)}><AiOutlineClose className="text-gray-400 hover:text-[#D8D8D8]" size={32}/></button>
                </div>
            </div>

            <div className="grid gap-y-8">
                <div className="mt-4">
                    <DragDropContext onDragEnd={(...props) => console.log(props)}>
                        <Droppable droppableId="droppable-1">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="grid gap-y-2">
                                    {selectedChannels.map((channel: IChannel, key: any) => (
                                        <Draggable key={channel.id} draggableId={`draggable-${channel.id}`} index={key}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
                                                    <div className="flex items-center h-full w-full">
                                                        <button {...provided.dragHandleProps} className="bg-[#F0EB8D] h-full px-4"><MdOutlineSwapVert /></button>
                                                        <h2 className="bg-white flex items-center h-full w-full pl-4">{channel.title}</h2>
                                                    </div>
                                                    <button className="bg-[#F0EB8D] h-full px-4" onClick={() => handleChannel(channel)}>Drop</button>
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
                        {unselectedChannels.map((channel: IChannel, key: any) => (
                            <div key={key} className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
                                <div className="flex items-center h-full w-full">
                                    <button className="bg-[#F0EB8D] h-full px-4"><MdOutlineSwapVert /></button>
                                    <h2 className="bg-white flex items-center h-full w-full pl-4">{channel.title}</h2>
                                </div>
                                <button className="bg-[#F0EB8D] h-full px-4" onClick={() => handleChannel(channel)}>Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}