import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
};

const isModalOpen = createSlice({
    name: "isModalOpen",
    initialState,
    reducers: {
        setModalOpan: (state, action) => {
            state.isModalOpen = action.payload;
        },
    },
});

export const { setModalOpan } = isModalOpen.actions;
export default isModalOpen.reducer;
