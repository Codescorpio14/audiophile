import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    cartOpen: false,
    navOpen: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    toggleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
    closeCart: (state) => {
      if (state.cartOpen === true) {
        state.cartOpen = false;
      }
    },
  },
});

export const { toggleCart, toggleNav, closeCart } = toggleSlice.actions;
export default toggleSlice.reducer;
