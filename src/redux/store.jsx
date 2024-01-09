import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import toggleReducer from "./features/togglesSlice";
import checkoutReducer from "./features/checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    toggle: toggleReducer,
    checkout: checkoutReducer,
  },
});

export default store;
