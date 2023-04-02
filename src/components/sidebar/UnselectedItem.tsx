import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiSettings } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import type { IChannel } from "@/types/IChannel";
import { addSelectedChannel } from "@/stores/selectedChannels";
import { deleteUnselectedChannel } from "@/stores/unselectedChannels";
import { changeUnselectedChannel } from "@/stores/unselectedChannels";
import ReactModal from "react-modal";
import getVideoId from "@/helpers/getVideoId";
import modalStyles from "@/helpers/modalStyles";
import toast from "react-hot-toast";
ReactModal.setAppElement("#__next");

type prop = {
    channel: IChannel;
};

export default function UnselectedItem({ channel }: prop) {
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function handleChannel(channel: IChannel) {
        dispatch(addSelectedChannel(channel));
        dispatch(deleteUnselectedChannel(channel.id));
        toast.success(channel.title, { icon: "➕" });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch(
            changeUnselectedChannel({
                id: channel.id,
                title: e.target.elements.title.value,
                address: getVideoId(e.target.elements.address.value),
                isSelected: channel.isSelected,
                autoplay: e.target.elements.autoplay.checked,
            })
        );
        toast.success(`${channel.title} ayarları değiştirildi.`);
        closeModal();
    }

    return (
        <div className="flex items-center justify-between border rounded h-12 text-[#2D2727]">
            <div className="flex items-center h-full w-full">
                <button
                    onClick={openModal}
                    className="bg-[#F0EB8D] hover:bg-gray-200 transition-all h-full px-4 group"
                >
                    <FiSettings className="group-hover:rotate-12" />
                </button>
                <h2 className="bg-white flex items-center h-full w-full pl-4 font-bold">
                    {channel.title}
                </h2>
            </div>
            <button
                className="bg-[#F0EB8D] hover:bg-gray-200 transition-all h-full px-4"
                onClick={() => handleChannel(channel)}
            >
                <GrAdd />
            </button>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Kanal Ayarları"
            >
                <div className="grid gap-y-8 text-[#2D2727]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Kanal Ayarları</h1>
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
                                defaultValue={channel.title}
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
                                defaultValue={`https://youtu.be/${channel.address}`}
                                pattern="^(https?:\/\/)?(www\.)?(youtu\.be\/([a-zA-Z0-9_-]+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))$"
                                title={`Lütfen 'youtu.be/${channel.address}' veya 'youtube.com/watch?v=${channel.address}' biçiminde bir bağlantı adresi girin.`}
                                required
                            />
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                name="autoplay"
                                defaultChecked={channel.autoplay}
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
