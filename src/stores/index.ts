import { configureStore } from "@reduxjs/toolkit"

import selectedChannels from "./selectedChannels"
import unselectedChannels from "./unselectedChannels"

const store = configureStore({
    reducer: {
        selectedChannels,
        unselectedChannels
    }
})

export default store
