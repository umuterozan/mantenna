import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
};

const isSidebarOpen = createSlice({
    name: "isSidebarOpen",
    initialState,
    reducers: {
        setSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
    },
});

export const { setSidebarOpen } = isSidebarOpen.actions;
export default isSidebarOpen.reducer;
