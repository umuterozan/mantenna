import UnselectedItem from "./UnselectedItem";
import type { IChannel } from "@/types/IChannel";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { addUnselectedChannel } from "@/stores/unselectedChannels";
import { setChannelsCount } from "@/stores/channelsCount";
import getVideoId from "@/helpers/getVideoId";
import ReactModal from "react-modal";
import modalStyles from "@/helpers/modalStyles";
import toast from "react-hot-toast";
ReactModal.setAppElement("#__next");

export default function UnselectedList() {
    const [isModalOpen, setModalOpen] = useState(false);
    const unselectedChannels: IChannel[] = useSelector(
        (state: any) => state.unselectedChannels.unselectedChannels
    );
    const channelsCount: number = useSelector(
        (state: any) => state.channelsCount.channelsCount
    );

    const dispatch = useDispatch();

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch(
            addUnselectedChannel({
                id: channelsCount + 1,
                title: e.target.elements.title.value,
                address: getVideoId(e.target.elements.address.value),
                isSelected: false,
                autoplay: e.target.elements.autoplay.checked,
            })
        );
        dispatch(setChannelsCount(channelsCount + 1));
        closeModal();
        toast.success(`${e.target.elements.title.value} kanalı oluşturuldu.`);
    }

    return (
        <div className="grid gap-y-4">
            <h1 className="font-light flex items-center justify-between">
                <span className="block">
                    Gösterilmeyen Kanallar ({unselectedChannels.length})
                </span>
                <button
                    onClick={openModal}
                    className="bg-[#F0EB8D] text-[#2D2727] hover:bg-gray-200 transition-all py-2 px-4 rounded font-medium text-sm"
                >
                    Yeni Kanal
                </button>
            </h1>
            <div className="grid gap-y-2">
                {unselectedChannels.map((channel: IChannel) => (
                    <UnselectedItem key={channel.id} channel={channel} />
                ))}
            </div>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Yeni Kanal"
            >
                <div className="grid gap-y-8 text-[#2D2727]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Yeni Kanal</h1>
                        <button
                            onClick={closeModal}
                            className="transition-all hover:text-[#8F43EE]"
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="grid gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <label
                                htmlFor="title"
                                className="text-sm font-medium"
                            >
                                Başlık
                            </label>
                            <input
                                className="border outline-none border-[#2D2727] rounded-lg hover:border-[#8F43EE] focus:border-[#8F43EE] p-2.5"
                                type="text"
                                name="title"
                                placeholder="Başlık"
                                maxLength={20}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label
                                htmlFor="title"
                                className="text-sm font-medium"
                            >
                                Bağlantı adresi
                            </label>
                            <input
                                className="border outline-none border-[#2D2727] rounded-lg hover:border-[#8F43EE] focus:border-[#8F43EE] p-2.5"
                                type="text"
                                name="address"
                                placeholder="Bağlantı adresi"
                                pattern="^(https?:\/\/)?(www\.)?(youtu\.be\/([a-zA-Z0-9_-]+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))$"
                                title={`Lütfen 'youtu.be/address' veya 'youtube.com/watch?v=address' biçiminde bir bağlantı adresi girin.`}
                                required
                            />
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                name="autoplay"
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8F43EE]"></div>
                            <span className="ml-3 font-medium">
                                Otomatik oynatma
                            </span>
                        </label>
                        <button className="bg-[#F0EB8D] py-2 rounded mt-4 font-medium transition-all hover:bg-gray-200">
                            Kaydet
                        </button>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}
