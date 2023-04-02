import Layout from "@/components/Layout";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect } from "react";
import ChannelList from "@/components/channel/ChannelList";
import { useDispatch } from "react-redux";
import { setSelectedChannels } from "@/stores/selectedChannels";
import { setUnselectedChannels } from "@/stores/unselectedChannels";
import { setChannelsCount } from "@/stores/channelsCount";
import TvRemote from "@/components/sidebar/TvRemote";
import SidebarEffect from "@/components/sidebar/SidebarEffect";
import { Toaster } from "react-hot-toast";

export default function Index({ data }: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedChannels(data.selectedChannels));
        dispatch(setUnselectedChannels(data.unselectedChannels));
        dispatch(setChannelsCount(data.channelsCount));
    }, []);

    return (
        <Layout title="Mantenna | Kanallar">
            <Sidebar />

            <SidebarEffect />

            <TvRemote />

            <ChannelList />

            <Toaster position="top-right" reverseOrder={false} />
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/channels");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}
