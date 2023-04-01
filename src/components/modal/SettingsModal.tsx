import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import SettingsForm from "./SettingsForm";
import { useSelector, useDispatch } from "react-redux";
import { setModalOpan } from "@/stores/isModalOpen";
import type { IChannel } from "@/types/IChannel";

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

export default function SettingsModal({ channel }: prop) {

    const isModalOpen: boolean = useSelector(
        (state: any) => state.isModalOpen.isModalOpen
    );

    const dispatch = useDispatch()
    
    function closeModal() {
        dispatch(setModalOpan(false));
    }

    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Kanal Ayarları"
        >
            <div className="grid gap-y-8 text-[#2D2727]">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Kanal Ayarları</h1>
                    <button onClick={closeModal}><AiOutlineClose size={24} /></button>
                </div>
                <SettingsForm channel={channel} />
            </div>
        </ReactModal>
    )
}