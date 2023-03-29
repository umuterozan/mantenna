import { createSlice } from "@reduxjs/toolkit";
import { IChannel } from "@/types/IChannel";

const initialState: { unselectedChannels: IChannel[] } = {
    unselectedChannels: [],
};

const unselectedChannels = createSlice({
    name: "unselectedChannels",
    initialState,
    reducers: {
        setUnselectedChannels: (state, action) => {
            state.unselectedChannels = action.payload;
        },
        addUnselectedChannel: (state, action) => {
            state.unselectedChannels = [
                ...state.unselectedChannels,
                action.payload,
            ];
        },
        deleteUnselectedChannel: (state, action) => {
            state.unselectedChannels = state.unselectedChannels.filter(
                (channel: IChannel) => channel.id !== action.payload
            );
        },
    },
});

export const {
    setUnselectedChannels,
    addUnselectedChannel,
    deleteUnselectedChannel,
} = unselectedChannels.actions;
export default unselectedChannels.reducer;
