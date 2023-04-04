import channels from "@/data/channels.json"
import Layout from "@/components/Layout";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect } from "react";
import ChannelList from "@/components/channel/ChannelList";
import { useDispatch } from "react-redux";
import { setUnselectedChannels } from "@/stores/unselectedChannels";
import { setChannelsCount } from "@/stores/channelsCount";
import TvRemote from "@/components/sidebar/TvRemote";
import SidebarEffect from "@/components/sidebar/SidebarEffect";
import { Toaster } from "react-hot-toast";

export default function Index({ data }: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUnselectedChannels(data.channels));
        dispatch(setChannelsCount(data.channelsCount));
    }, [data.channels, data.channelsCount, dispatch]);

    return (
        <Layout title="Mantenna">
            <Sidebar />

            <SidebarEffect />

            <TvRemote />

            <ChannelList />

            <Toaster position="top-right" reverseOrder={false} />
        </Layout>
    );
}

export async function getStaticProps() {
    const data = {
        channels,
        channelsCount: channels.length
    }

    return {
        props: {
            data,
        },
    };
}
