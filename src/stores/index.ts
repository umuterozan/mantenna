import { configureStore } from "@reduxjs/toolkit";
import selectedChannels from "./selectedChannels";
import unselectedChannels from "./unselectedChannels";
import isSidebarOpen from "./isSidebarOpen";
import channelsCount from "./channelsCount";

const store = configureStore({
    reducer: {
        selectedChannels,
        unselectedChannels,
        isSidebarOpen,
        channelsCount,
    },
});

export default store;
