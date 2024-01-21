import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState: {
        isVisible: false,
        address : {
            formatted_address : "Bangalore, Karantaka"
        }
    },
    reducers: {
        setAddress : (state, actions) => {
            state.address = actions.payload
        },
        
        toggleLocation: (state) => {
            state.isVisible = !state.isVisible
        },
    },
});

export const { toggleLocation, setAddress } = locationSlice.actions;

export default locationSlice.reducer;
