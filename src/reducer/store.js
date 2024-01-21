import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTextSlice';
import cartReducer from './cartSlice';
import locationReducer from './locationSlice';
export const store = configureStore({
    reducer: {
        search: searchTermReducer,
        cart: cartReducer,
        location : locationReducer
    },
});

export default store;
