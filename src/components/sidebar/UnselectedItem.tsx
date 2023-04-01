import type { IChannel } from "@/types/IChannel";
import { FiSettings } from "react-icons/fi";
import { GrAdd } from "react-icons/gr"
import SettingsModal from "../modal/SettingsModal";
import { useDispatch } from "react-redux";
import { addSelectedChannel } from "@/stores/selectedChannels";
import { deleteUnselectedChannel } from "@/stores/unselectedChannels";
import { setModalOpan } from "@/stores/isModalOpen";

type prop = {
    channel: IChannel;
};

export default function UnselectedItem({ channel }: prop) {

    const dispatch = useDispatch()
    
    function handleChannel(channel: IChannel) {
        dispatch(addSelectedChannel(channel));
        dispatch(deleteUnselectedChannel(channel.id));
    }

    function openModal() {
        dispatch(setModalOpan(true));
    }
    
    return (
        <div className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
            <div className="flex items-center h-full w-full">
                <button
                    onClick={openModal}
                    className="bg-[#F0EB8D] h-full px-4"
                >
                    <FiSettings />
                </button>
                <h2 className="bg-white flex items-center h-full w-full pl-4 font-bold">
                    {channel.title}
                </h2>
            </div>
            <button
                className="bg-[#F0EB8D] h-full px-4"
                onClick={() => handleChannel(channel)}
            >
                <GrAdd />
            </button>

            <SettingsModal channel={channel} />
        </div>
    );
}
