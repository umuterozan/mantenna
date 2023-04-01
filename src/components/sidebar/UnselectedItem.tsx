import type { IChannel } from "@/types/IChannel";
import { FiSettings } from "react-icons/fi";
import { GrAdd } from "react-icons/gr"
import { useDispatch } from "react-redux";
import { addSelectedChannel } from "@/stores/selectedChannels";
import { deleteUnselectedChannel } from "@/stores/unselectedChannels";

import ReactModal from "react-modal";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: 350,
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 20,
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#__next");

type prop = {
    channel: IChannel;
};

export default function UnselectedItem({ channel }: prop) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    const dispatch = useDispatch();

    function handleChannel(channel: IChannel) {
        dispatch(addSelectedChannel(channel));
        dispatch(deleteUnselectedChannel(channel.id));
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


            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Kanal Ayarları"
            >
                <div className="grid gap-y-8 text-[#2D2727]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Kanal Ayarları</h1>
                        <button onClick={closeModal}><AiOutlineClose size={24} /></button>
                    </div>
                    <form className="grid gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="title" className="text-sm font-medium">Başlık</label>
                            <input className="border outline-none border-[#2D2727] rounded-lg focus:border-[#8F43EE] p-2.5" type="text" id="title" placeholder="Başlık" defaultValue={channel.title} />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="title" className="text-sm font-medium">Link</label>
                            <input className="border outline-none border-[#2D2727] rounded-lg focus:border-[#8F43EE] p-2.5" type="text" id="address" placeholder="Adres" defaultValue={`https://youtu.be/${channel.address}`} />
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer mt-2">
                            <input type="checkbox" defaultChecked={channel.autoPlay} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            <span className="ml-3 font-medium">Autoplay Mode</span>
                        </label>
                        <button className="bg-[#F0EB8D] py-2 rounded mt-4 font-medium">Kaydet</button>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}
