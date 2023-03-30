import SelectedList from "./SelectedList";
import UnselectedList from "./UnselectedList";

export default function SidebarList() {
    return (
        <div className="grid gap-y-8">
            <SelectedList />

            <UnselectedList />
        </div>
    );
}
