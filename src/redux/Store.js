import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const Store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        auth : authSlice
    }
})

export default Store