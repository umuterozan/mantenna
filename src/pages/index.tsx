import Layout from "@/components/Layout";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect } from "react";
import ChannelList from "@/components/channel/ChannelList";
import { useDispatch } from "react-redux";
import { setSelectedChannels } from "@/stores/selectedChannels";
import { setUnselectedChannels } from "@/stores/unselectedChannels";
import TvRemote from "@/components/sidebar/TvRemote";
import SidebarEffect from "@/components/sidebar/SidebarEffect";

export default function Index({ data }: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedChannels(data.selectedChannels));
        dispatch(setUnselectedChannels(data.unselectedChannels));
    }, []);

    return (
        <Layout title="Mantenna | Channels">
            <Sidebar />

            <SidebarEffect />

            <TvRemote />

            <ChannelList />
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
