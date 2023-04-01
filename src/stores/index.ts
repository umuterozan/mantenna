import { configureStore } from "@reduxjs/toolkit";
import selectedChannels from "./selectedChannels";
import unselectedChannels from "./unselectedChannels";
import isSidebarOpen from "./isSidebarOpen";
import isModalOpen from "./isModalOpen";

const store = configureStore({
    reducer: {
        selectedChannels,
        unselectedChannels,
        isSidebarOpen,
        isModalOpen,
    },
});

export default store;
