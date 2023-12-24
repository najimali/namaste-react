import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            const { id: deleteId } = action.payload
            const { items: existingItems } = state
            state.items = existingItems.filter(({ id }) => id != deleteId)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;