import Layout from "@/components/Layout";
import Sidebar from "@/components/ui/Sidebar";
import { useState, useEffect } from "react";
import { GiTvRemote } from "react-icons/gi"
import ChannelList from "@/components/channels/ChannelList";
import { useDispatch } from "react-redux";
import { setSelectedChannels } from "@/stores/selectedChannels";
import { setUnselectedChannels } from "@/stores/unselectedChannels";

export default function Index({ data }: any) {

    const dispatch = useDispatch()
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        dispatch(setSelectedChannels(data.selectedChannels))
        dispatch(setUnselectedChannels(data.unselectedChannels))
    }, [])

    return (
        <Layout title="Mantenna | Channels">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={() => setSidebarOpen(false)} className={`fixed w-full h-full bg-black opacity-50 ${isSidebarOpen ? "block" : "hidden"}`}></div>

            <div className="fixed h-full flex items-center justify-center"><button onClick={() => setSidebarOpen(true)} className="bg-[#2D2727] text-white hover:text-[#F0EB8D] p-2 rounded flex items-center gap-x-2 hover:after:content-['Kumanda']"><GiTvRemote size={32} /></button></div>

            <ChannelList />
        </Layout>
    )
}

export async function getStaticProps() {

    const res = await fetch("http://localhost:3000/api/channels")
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}