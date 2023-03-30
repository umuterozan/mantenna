import { BiFullscreen } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import type { IChannel } from "@/types/IChannel";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOpen } from "@/stores/isSidebarOpen";

export default function SidebarHeader() {
    const dispatch = useDispatch();
    const selectedChannels: IChannel[] = useSelector(
        (state: any) => state.selectedChannels.selectedChannels
    );

    async function handleFullScreen() {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        } else {
            await document.body.requestFullscreen();
        }
    }

    function closeSidebar() {
        dispatch(setSidebarOpen(false));
    }

    return (
        <div className="flex items-center justify-between">
            <h1>Gösterilen Kanallar ({selectedChannels.length})</h1>
            <div className="flex items-center gap-4">
                <button onClick={handleFullScreen}>
                    <BiFullscreen
                        className="text-gray-400 hover:text-[#D8D8D8]"
                        size={32}
                    />
                </button>
                <button onClick={closeSidebar}>
                    <AiOutlineClose
                        className="text-gray-400 hover:text-[#D8D8D8]"
                        size={32}
                    />
                </button>
            </div>
        </div>
    );
}
