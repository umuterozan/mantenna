import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect} from "react";
import { IChannel } from "@/types/IChannel";
import { getChannels } from "@/service/channels";
import { GiTvRemote } from "react-icons/gi"

export default function Channels() {

    const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([])
    const [unselectedChannels, setUnselectedChannels] = useState<IChannel[]>([])
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [gridStyles, setGridStyles] = useState({})

    useEffect(() => {
        getChannels().then((res: any) => {
            setSelectedChannels(res.filter((channel: IChannel) => channel.isSelected))
            setUnselectedChannels(res.filter((channel: IChannel) => !channel.isSelected))
        })
    }, [])

    useEffect(() => {
        const colCount: number = Math.ceil(Math.sqrt(selectedChannels.length))
        const rowCount: number = Math.ceil(selectedChannels.length / colCount)

        const gridStyles = {
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            gridTemplateRows: `repeat(${rowCount}, 1fr)`,
        };

        setGridStyles(gridStyles)
    }, [selectedChannels.length])

    return (
        <Layout title="Channels">
            <Sidebar selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels} unselectedChannels={unselectedChannels} setUnselectedChannels={setUnselectedChannels} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={() => setSidebarOpen(false)} className={`fixed w-full h-full bg-black opacity-50 ${isSidebarOpen ? "block" : "hidden"}`}></div>

            <div className="fixed h-full flex items-center justify-center"><button onClick={() => setSidebarOpen(true)} className="bg-[#2D2727] text-white hover:text-[#F0EB8D] p-2 rounded flex items-center gap-x-2 hover:after:content-['Kumanda']"><GiTvRemote size={32} /></button></div>
            <div className="channels_container">
                <div className="h-full grid" style={gridStyles}>
                    {selectedChannels.sort((a, b) => a.order - b.order).map((channel) => (
                        <Channel key={channel.id} title={channel.title} address={channel.address} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}