import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect, useRef} from "react";
import { IChannel } from "@/types/IChannel";
import { getChannels } from "@/service/channels";
import { GiTvRemote } from "react-icons/gi"

export default function Channels() {

    const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([])
    const [unselectedChannels, setUnselectedChannels] = useState<IChannel[]>([])
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        getChannels().then((res: any) => {
            setSelectedChannels(res.filter((channel: IChannel) => channel.isSelected))
            setUnselectedChannels(res.filter((channel: IChannel) => !channel.isSelected))
        })
    }, [])

    return (
        <Layout title="Channels">
            <Sidebar selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels} unselectedChannels={unselectedChannels} setUnselectedChannels={setUnselectedChannels} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={() => setSidebarOpen(false)} className={`fixed w-screen h-screen bg-black opacity-50 ${isSidebarOpen ? "block" : "hidden"}`}></div>
            <div className="flex items-center bg-[#413543]">
                <button onClick={() => setSidebarOpen(true)} className="bg-[#2D2727] h-screen text-white hover:text-[#F0EB8D]"><GiTvRemote size={32} /></button>
                <div className={`channels_container h-screen w-full gap-1 p-1 grid grid-cols-2`}>
                    {selectedChannels.map((channel) => (
                        <Channel key={channel.id} id={channel.id} title={channel.title} address={channel.address} />
                    ))}
                </div>
                <button onClick={() => setSidebarOpen(true)} className="bg-[#2D2727] h-screen text-white hover:text-[#F0EB8D]"><GiTvRemote size={32} /></button>
            </div>
        </Layout>
    )
}