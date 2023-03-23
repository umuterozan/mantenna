import {BiFullscreen} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import {IChannel} from "@/types/IChannel";

export default function Sidebar({ selectedChannels, setSelectedChannels, unselectedChannels, setUnselectedChannels }: any) {

    const handleChannel = (channel: IChannel) => {
        if (channel.isSelected === false) {
            channel.isSelected = true
            setUnselectedChannels(unselectedChannels.filter((channel: IChannel) => !channel.isSelected))
            setSelectedChannels([
                ...selectedChannels,
                channel
            ])
        } else {
            channel.isSelected = false
            setSelectedChannels(selectedChannels.filter((channel: IChannel) => channel.isSelected))
            setUnselectedChannels([
                ...unselectedChannels,
                channel
            ])
        }
    }

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
                <div className="grid gap-y-4">
                    <div className="grid gap-y-2">
                        {selectedChannels.map((channel: IChannel, key: any) => (
                            <button onClick={() => handleChannel(channel)} key={key} className="w-full bg-gray-100 text-black">{channel.title}</button>
                        ))}
                    </div>
                    <hr/>
                    <div className="grid gap-y-2">
                        {unselectedChannels.map((channel: IChannel, key: any) => (
                            <button onClick={() => handleChannel(channel)} key={key} className="w-full bg-gray-100 text-black">{channel.title}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}