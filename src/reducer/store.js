import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTextSlice';
import cartReducer from './cartSlice';
export const store = configureStore({
    reducer: {
        search: searchTermReducer,
        cart: cartReducer
    },
});

export default store;
