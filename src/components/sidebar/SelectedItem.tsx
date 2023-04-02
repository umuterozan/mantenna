import { MdOutlineSwapVert } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import type { IChannel } from "@/types/IChannel";
import type { DraggableProvided } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { addUnselectedChannel } from "@/stores/unselectedChannels";
import { deleteSelectedChannel } from "@/stores/selectedChannels";
import toast from 'react-hot-toast';

type props = {
    provided: DraggableProvided;
    channel: IChannel;
};

export default function SelectedItem({ provided, channel }: props) {
    const dispatch = useDispatch();

    function handleChannel(channel: IChannel) {
        dispatch(addUnselectedChannel(channel));
        dispatch(deleteSelectedChannel(channel.id));
        toast.success(channel.title, { icon: '➖' })
    }

    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className="flex items-center justify-between border rounded h-12 text-[#2D2727]"
        >
            <div className="flex items-center h-full w-full">
                <button
                    {...provided.dragHandleProps}
                    className="bg-[#F0EB8D] h-full px-4"
                >
                    <MdOutlineSwapVert />
                </button>
                <h2 className="bg-white flex items-center h-full w-full pl-4 font-bold">
                    {channel.title}
                </h2>
            </div>
            <button
                className="bg-[#F0EB8D] h-full px-4"
                onClick={() => handleChannel(channel)}
            >
                <AiOutlineMinus />
            </button>
        </div>
    );
}
