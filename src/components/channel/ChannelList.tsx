import ChannelItem from "./ChannelItem";
import { useState, useEffect } from "react";
import type { IChannel } from "@/types/IChannel";
import { useSelector } from "react-redux";
import Introduction from "../introduction";

export default function ChannelList() {
    const selectedChannels: IChannel[] = useSelector(
        (state: any) => state.selectedChannels.selectedChannels
    );
    const [gridStyles, setGridStyles] = useState({});

    useEffect(() => {
        const colCount: number = Math.ceil(Math.sqrt(selectedChannels.length));
        const rowCount: number = Math.ceil(selectedChannels.length / colCount);

        const gridStyles = {
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            gridTemplateRows: `repeat(${rowCount}, 1fr)`,
        };

        setGridStyles(gridStyles);
    }, [selectedChannels.length]);

    return (
        <>
            {selectedChannels.length > 0 ? (
                <div className="channels_container">
                    <div className="h-full grid" style={gridStyles}>
                        {selectedChannels.map((channel: IChannel) => (
                            <ChannelItem
                                key={channel.id}
                                title={channel.title}
                                address={channel.address}
                                autoplay={channel.autoplay}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="introduction_container">
                    <Introduction />
                </div>
            )}
        </>
    );
}
