import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else{
              state.items.push({
                ...action.payload,
                count: 1,
              });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
               return parseInt(obj.price.replace(/\s+/g, '')) * obj.count + sum;
            }, 0);
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem === 1) {
                findItem.count = 1;
            } else {
                findItem.count --;
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
               return state.totalPrice - parseInt(obj.price.replace(/\s+/g, ''));
            }, 0);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return state.totalPrice - parseInt(obj.price.replace(/\s+/g, '')) * obj.count;
             }, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, clearCart, minusItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;