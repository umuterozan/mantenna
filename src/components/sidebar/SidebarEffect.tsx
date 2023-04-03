import { useSelector, useDispatch } from "react-redux";
import { setSidebarOpen } from "@/stores/isSidebarOpen";

export default function SidebarEffect() {
    const dispatch = useDispatch();
    const isSidebarOpen: boolean = useSelector(
        (state: any) => state.isSidebarOpen.isSidebarOpen
    );

    function closeSidebar() {
        dispatch(setSidebarOpen(false));
    }

    return (
        <div
            onClick={closeSidebar}
            className={`fixed w-full h-full bg-black opacity-50 z-10 ${
                isSidebarOpen ? "block" : "hidden"
            }`}
        ></div>
    );
}
