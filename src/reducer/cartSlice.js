import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isVisible: false,
        items: [],
        totalAmount : 0
    },
    reducers: {
        addItem: (state, action) => {
            const { id: itemId, price, defaultPrice } = action.payload
            const existingItem = state.items.find(item => item.id === itemId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1
                }
                state.items.push(newItem)
            }
            state.totalAmount += (price || defaultPrice)/100
        },
        deleteItem: (state, action) => {
            const { id: deleteId } = action.payload
            const { items: existingItems } = state
            state.items = existingItems.filter(({ id }) => id != deleteId)
            
        },
        clearCart: (state) => {
            state.items = []
            state.totalAmount = 0
        },
        toggleCart: (state) => {
            state.isVisible = !state.isVisible
        },
        increaseQuantity: (state, action) => {
            const itemId  = action.payload;
            const item = state.items.find(({ id }) => id === itemId);
            if (item) {
                item.quantity += 1;
            }
            state.totalAmount += (item.price || item.defaultPrice)/100
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex(({ id }) => id === itemId);

            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                item.quantity -= 1;
                state.totalAmount -= (item.price || item.defaultPrice)/100
                if (item.quantity === 0) {
                    state.items.splice(itemIndex, 1);
                }
            }

            
        }
    }
})

export const { addItem, deleteItem, clearCart, toggleCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;