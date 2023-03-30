import type { IChannel } from "@/types/IChannel";
import { GrChannel } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addSelectedChannel } from "@/stores/selectedChannels";
import { deleteUnselectedChannel } from "@/stores/unselectedChannels";

type prop = {
    channel: IChannel;
};

export default function UnselectedItem({ channel }: prop) {
    const dispatch = useDispatch();

    function handleChannel(channel: IChannel) {
        dispatch(addSelectedChannel(channel));
        dispatch(deleteUnselectedChannel(channel.id));
    }

    return (
        <div className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
            <div className="flex items-center h-full w-full">
                <button className="bg-[#F0EB8D] h-full px-4 cursor-default">
                    <GrChannel />
                </button>
                <h2 className="bg-white flex items-center h-full w-full pl-4">
                    {channel.title}
                </h2>
            </div>
            <button
                className="bg-[#F0EB8D] h-full px-4"
                onClick={() => handleChannel(channel)}
            >
                Add
            </button>
        </div>
    );
}
