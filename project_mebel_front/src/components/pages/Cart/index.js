import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart1"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})