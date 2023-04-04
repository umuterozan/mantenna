import { GiTvRemote } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "@/stores/isSidebarOpen";

export default function TvRemote() {
    const dispatch = useDispatch();

    function openSidebar() {
        dispatch(setSidebarOpen(true));
    }

    return (
        <div className="fixed h-full flex items-center justify-center z-10">
            <button
                onClick={openSidebar}
                className="bg-[#2D2727] text-white hover:text-[#F0EB8D] p-2 rounded flex items-center gap-x-2 hover:after:content-['Kumanda']"
            >
                <GiTvRemote size={32} />
            </button>
        </div>
    );
}
