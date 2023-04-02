import UnselectedItem from "./UnselectedItem";
import type { IChannel } from "@/types/IChannel";
import { useSelector } from "react-redux";

export default function UnselectedList() {
    const unselectedChannels: IChannel[] = useSelector(
        (state: any) => state.unselectedChannels.unselectedChannels
    );

    return (
        <div className="grid gap-y-4">
            <h1 className="font-light">
                Gösterilmeyen Kanallar ({unselectedChannels.length})
            </h1>
            <div className="grid gap-y-2">
                {unselectedChannels.map((channel: IChannel) => (
                    <UnselectedItem key={channel.id} channel={channel} />
                ))}
            </div>
        </div>
    );
}
