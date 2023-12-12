import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTextSlice';

export const store = configureStore({
    reducer: {
        search: searchTermReducer,
    },
});

export default store;
