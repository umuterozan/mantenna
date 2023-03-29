import { configureStore } from "@reduxjs/toolkit";
import selectedChannels from "./selectedChannels";
import unselectedChannels from "./unselectedChannels";
import isSidebarOpen from "./isSidebarOpen";

const store = configureStore({
    reducer: {
        selectedChannels,
        unselectedChannels,
        isSidebarOpen,
    },
});

export default store;
