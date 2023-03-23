import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect} from "react";
import { IChannel } from "@/types/IChannel";
import { getChannels } from "@/service/channels";

export default function Channels() {

    const [channels, setChannels] = useState<IChannel[]>([])

    useEffect(() => {
        getChannels().then((res: any) => setChannels(res))
    }, [])

    return (
        <Layout title="Channels">
            <Sidebar channels={channels} />
            <div className="channels_container h-screen gap-2 grid grid-cols-2">
                {channels.filter((channel) => channel.isSelected).map((channel, key) => (
                    <Channel key={key} title={channel.title} address={channel.address} />
                ))}
            </div>
        </Layout>
    )
}