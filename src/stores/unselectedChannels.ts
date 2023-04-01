import { createSlice } from "@reduxjs/toolkit";
import type { IChannel } from "@/types/IChannel";

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
        changeUnselectedChannel: (state, action) => {
            const unselectedChannelsCopy = [...state.unselectedChannels]
            const targetIndex = state.unselectedChannels.findIndex(c => c.id === action.payload.id)
            unselectedChannelsCopy[targetIndex] = action.payload
            state.unselectedChannels = unselectedChannelsCopy
        }
    },
});

export const {
    setUnselectedChannels,
    addUnselectedChannel,
    deleteUnselectedChannel,
    changeUnselectedChannel
} = unselectedChannels.actions;
export default unselectedChannels.reducer;
