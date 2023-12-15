import { createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
    name: 'searchTermSlice',
    initialState: {
        text: ''
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = searchTermSlice.actions;

export default searchTermSlice.reducer;
