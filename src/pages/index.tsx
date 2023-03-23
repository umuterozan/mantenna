import { Layout, Channel, Sidebar } from "@/components";
import {useState, useEffect} from "react";
import { IChannel } from "@/types/IChannel";
import { getChannels } from "@/service/channels";

export default function Channels() {

    const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([])
    const [unselectedChannels, setUnselectedChannels] = useState<IChannel[]>([])

    useEffect(() => {
        getChannels().then((res: any) => {
            setSelectedChannels(res.filter((channel: IChannel) => channel.isSelected))
            setUnselectedChannels(res.filter((channel: IChannel) => !channel.isSelected))
        })
    }, [])

    return (
        <Layout title="Channels">
            <Sidebar selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels} unselectedChannels={unselectedChannels} setUnselectedChannels={setUnselectedChannels} />
            <div className="channels_container h-screen gap-2 grid grid-cols-2">
                {selectedChannels.map((channel, key) => (
                    <Channel key={key} title={channel.title} address={channel.address} />
                ))}
            </div>
        </Layout>
    )
}