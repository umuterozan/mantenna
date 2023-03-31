import type { IChannel } from "@/types/IChannel";
import { FiSettings } from "react-icons/fi";
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
    },
    overlay: {
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


            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Kanal Ayarları"
            >
                <div className="grid gap-y-8 w-96">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Kanal Ayarları</h1>
                        <button onClick={closeModal}><AiOutlineClose size={24} /></button>
                    </div>
                    <form className="grid gap-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="title">Başlık</label>
                            <input className="border outline-none border-gray-700 rounded-lg focus:border-blue-500 p-2.5" type="text" id="title" placeholder="Başlık" defaultValue={channel.title} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="title">Link</label>
                            <input className="border outline-none border-gray-700 rounded-lg focus:border-blue-500 p-2.5" type="text" id="address" placeholder="Adres" defaultValue={`https://youtu.be/${channel.address}`} />
                        </div>
                        <button>Kaydet</button>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}
