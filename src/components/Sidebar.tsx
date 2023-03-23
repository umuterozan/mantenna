import {BiFullscreen} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import {List} from "@/components/index";
import {IChannel} from "@/types/IChannel";

export default function Sidebar({ channels }: any) {
    return (
        <div className="p-6 bg-[#212529] text-white h-screen w-[300px] absolute text-lg">
            <div className="flex items-center justify-between">

                <h1>Mantenna | Settings</h1>
                <div className="flex items-center gap-2">
                    <button><BiFullscreen className="text-gray-400" size={24}/></button>
                    <button><AiOutlineClose className="text-gray-400" size={24}/></button>
                </div>

            </div>

            <div className="mt-20 grid gap-y-4">
                <h1>Channel List</h1>
                <div className="grid gap-y-2">
                    {channels.filter((channel: IChannel) => channel.isSelected).map((channel: IChannel, key: any) => (
                        <List key={key} title={channel.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}