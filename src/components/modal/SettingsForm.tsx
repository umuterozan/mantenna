import { useDispatch } from "react-redux";
import { changeUnselectedChannel } from "@/stores/unselectedChannels";
import type { IChannel } from "@/types/IChannel";
import getVideoId from "@/helpers/getVideoId";
import { setModalOpan } from "@/stores/isModalOpen";

type prop = {
    channel: IChannel;
};

export default function SettingsForm({ channel }: prop) {

    const dispatch = useDispatch();

    function closeModal() {
        dispatch(setModalOpan(false));
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        dispatch(changeUnselectedChannel({
            id: channel.id,
            title: e.target.elements.title.value,
            address: getVideoId(e.target.elements.address.value),
            isSelected: channel.isSelected,
            autoplay: e.target.elements.autoplay.checked
        }))
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-y-4">
            <div className="flex flex-col gap-y-1">
                <label htmlFor="title" className="text-sm font-medium">Başlık</label>
                <input className="border outline-none border-[#2D2727] rounded-lg focus:border-[#8F43EE] p-2.5" type="text" name="title" placeholder="Başlık" defaultValue={channel.title} required />
            </div>
            <div className="flex flex-col gap-y-1">
                <label htmlFor="title" className="text-sm font-medium">Link</label>
                <input className="border outline-none border-[#2D2727] rounded-lg focus:border-[#8F43EE] p-2.5" type="text" name="address" placeholder="Adres" defaultValue={`https://youtu.be/${channel.address}`} required />
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-2">
                <input type="checkbox" name="autoplay" defaultChecked={channel.autoplay} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8F43EE]"></div>
                <span className="ml-3 font-medium">Otomatik oynatma</span>
            </label>
            <button className="bg-[#F0EB8D] py-2 rounded mt-4 font-medium">Kaydet</button>
        </form>
    )
}