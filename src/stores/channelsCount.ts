import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelsCount: 0,
};

const channelsCount = createSlice({
    name: "channelsCount",
    initialState,
    reducers: {
        setChannelsCount: (state, action) => {
            state.channelsCount = action.payload;
        },
    },
});

export const { setChannelsCount } = channelsCount.actions;
export default channelsCount.reducer;
