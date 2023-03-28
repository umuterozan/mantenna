import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect} from "react";
import { IChannel } from "@/types/IChannel";
import { getChannels } from "@/service/channels";
import { GiTvRemote } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChannels } from "@/stores/selectedChannels";
import { setUnselectedChannels } from "@/stores/unselectedChannels";

export default function Index() {

    const dispatch = useDispatch()
    const selectedChannels: IChannel[] = useSelector((state: any)=> state.selectedChannels.selectedChannels)
    const unselectedChannels: IChannel[] = useSelector((state: any) => state.unselectedChannels.unselectedChannels)

    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [gridStyles, setGridStyles] = useState({})

    useEffect(() => {
        getChannels().then((res: any) => {
            dispatch(setSelectedChannels(res.filter((channel: IChannel) => channel.isSelected)))
            dispatch(setUnselectedChannels(res.filter((channel: IChannel) => !channel.isSelected)))
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

    console.log(selectedChannels)

    return (
        <Layout title="Channels">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={() => setSidebarOpen(false)} className={`fixed w-full h-full bg-black opacity-50 ${isSidebarOpen ? "block" : "hidden"}`}></div>

            <div className="fixed h-full flex items-center justify-center"><button onClick={() => setSidebarOpen(true)} className="bg-[#2D2727] text-white hover:text-[#F0EB8D] p-2 rounded flex items-center gap-x-2 hover:after:content-['Kumanda']"><GiTvRemote size={32} /></button></div>
            <div className="channels_container">
                <div className="h-full grid" style={gridStyles}>
                    {selectedChannels.map((channel: IChannel) => (
                        <Channel key={channel.id} title={channel.title} address={channel.address} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}