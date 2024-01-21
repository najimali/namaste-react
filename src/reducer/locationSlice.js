import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState: {
        isVisible: true
    },
    reducers: {
        toggleLocation: (state) => {
            state.isVisible = !state.isVisible
        },
    },
});

export const { toggleLocation } = locationSlice.actions;

export default locationSlice.reducer;
