import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect} from "react";
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
            <button onClick={() => setSidebarOpen(true)} className="absolute bg-gray-300 h-full flex items-center justify-center"><GiTvRemote size={54} /></button>
            <Sidebar selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels} unselectedChannels={unselectedChannels} setUnselectedChannels={setUnselectedChannels} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={() => setSidebarOpen(false)} className={`fixed w-screen h-screen bg-black opacity-50 ${isSidebarOpen ? "block" : "hidden"}`}></div>
            <div className={`channels_container h-screen gap-2 grid grid-cols-${parseInt(selectedChannels.length / 2)}`}>
                {selectedChannels.map((channel, key) => (
                    <Channel key={key} title={channel.title} address={channel.address} />
                ))}
            </div>
        </Layout>
    )
}