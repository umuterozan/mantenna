import { createSlice } from "@reduxjs/toolkit";
import { IChannel } from "@/types/IChannel";

const initialState: { selectedChannels: IChannel[] } = {
    selectedChannels: []
}

const selectedChannels = createSlice({
    name: 'selectedChannels',
    initialState,
    reducers: {
        setSelectedChannels: (state, action) => {
            state.selectedChannels = action.payload
        },
        addSelectedChannel: (state, action) => {
            state.selectedChannels = [
                ...state.selectedChannels,
                action.payload
            ]
        },
        deleteSelectedChannel: (state, action) => {
            state.selectedChannels = state.selectedChannels.filter((channel: IChannel) => channel.id !== action.payload)
        }
    }
})

export const { setSelectedChannels, addSelectedChannel, deleteSelectedChannel } = selectedChannels.actions
export default selectedChannels.reducer