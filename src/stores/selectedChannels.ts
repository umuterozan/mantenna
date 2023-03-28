import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedChannels: []
}

const selectedChannels = createSlice({
    name: 'selectedChannels',
    initialState,
    reducers: {
        addChannel: (state, action) => {
            state.selectedChannels = [
                ...selectedChannels,
                action.payload
            ]
        }
    }
})

export const { addChannel } = selectedChannels.actions
export default selectedChannels.reducer