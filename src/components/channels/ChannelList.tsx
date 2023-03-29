import ChannelItem from "./ChannelItem"
import { useState, useEffect } from "react"
import { IChannel } from "@/types/IChannel";
import { useSelector } from "react-redux";

export default function ChannelList() {

    const selectedChannels: IChannel[] = useSelector((state: any)=> state.selectedChannels.selectedChannels)
    const [gridStyles, setGridStyles] = useState({})

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
        <div className="channels_container">
            <div className="h-full grid" style={gridStyles}>
                {selectedChannels.map((channel: IChannel) => (
                    <ChannelItem key={channel.id} title={channel.title} address={channel.address} />
                ))}
            </div>
        </div>
    )
}