import { BiFullscreen } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineSwapVert } from "react-icons/md"
import {IChannel} from "@/types/IChannel";
import {useState} from "react";

export default function Sidebar({ selectedChannels, setSelectedChannels, unselectedChannels, setUnselectedChannels, isSidebarOpen, setSidebarOpen }: any) {
    const [isFullScreen, setFullScreen] = useState(false)

    const handleFullScreen = async () => {
        if (!isFullScreen) {
            await document.body.requestFullscreen()
            setFullScreen(true)
        }
        if (isFullScreen) {
            await document.exitFullscreen()
            setFullScreen(false)
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
        <div className={`p-6 bg-[#245953] text-white h-screen w-[400px] absolute text-lg overflow-y-auto z-10 transition-all ${isSidebarOpen ? "-translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between">
                <h1>Mantenna | Kanallar ({selectedChannels.length})</h1>
                <div className="flex items-center gap-4">
                    <button onClick={handleFullScreen}><BiFullscreen className={isFullScreen ? "text-[#D8D8D8] hover:text-gray-400" : "text-gray-400 hover:text-[#D8D8D8]"} size={32}/></button>
                    <button onClick={() => setSidebarOpen(false)}><AiOutlineClose className="text-gray-400 hover:text-[#D8D8D8]" size={32}/></button>
                </div>
            </div>

            <div className="grid gap-y-8">
                <div className="mt-4">
                    <div className="grid gap-y-2">
                        {selectedChannels.map((channel: IChannel, key: any) => (
                            <div key={key} className="flex items-center justify-between border rounded h-12 bg-gray-100 text-black">
                                <div className="flex items-center h-full w-full">
                                    <button className="bg-[#D8D8D8] h-full px-4"><MdOutlineSwapVert /></button>
                                    <h2 className="flex items-center h-full w-full pl-4">{channel.title}</h2>
                                </div>
                                <button className="bg-[#D8D8D8] h-full px-4" onClick={() => handleChannel(channel)}>Drop</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <h1>Gösterilmeyen Kanallar ({unselectedChannels.length})</h1>
                    <div className="grid gap-y-2">
                        {unselectedChannels.map((channel: IChannel, key: any) => (
                            <div key={key} className="flex items-center justify-between border rounded h-12 bg-gray-100 text-black">
                                <div className="flex items-center h-full w-full">
                                    <button className="bg-[#D8D8D8] h-full px-4"><MdOutlineSwapVert /></button>
                                    <h2 className="flex items-center h-full w-full pl-4">{channel.title}</h2>
                                </div>
                                <button className="bg-[#D8D8D8] h-full px-4" onClick={() => handleChannel(channel)}>Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}