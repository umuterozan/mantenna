import ChannelItem from "./ChannelItem";
import { useState, useEffect } from "react";
import type { IChannel } from "@/types/IChannel";
import { useSelector } from "react-redux";

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
        <div className="channels_container">
            {selectedChannels.length > 0 ? (
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
            ) : (
                <div>
                    <h1>Mantenna | Multi TV</h1>
                    <p>Ekranın solunda yer alan kumanda ikonundan seçtiğiniz kanalları ekranda listeleyebilir, youtube adresi, otomatik oynatma gibi ayarlarını yapabilirsiniz.</p>
                </div>
            )}

        </div>
    );
}