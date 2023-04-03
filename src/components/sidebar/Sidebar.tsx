import { useSelector } from "react-redux";
import SidebarList from "./SidebarList";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
    const isSidebarOpen: boolean = useSelector(
        (state: any) => state.isSidebarOpen.isSidebarOpen
    );

    return (
        <div
            className={`p-6 bg-[#2D2727] text-white h-full w-[400px] fixed text-lg overflow-y-auto z-20 transition-all ${
                isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
            }`}
        >
            <SidebarHeader />

            <SidebarList />
        </div>
    );
}
