import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    count: 0,
    quantity: 1,
    total: 0,
    vat: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        id: action.payload.id,
        quantity: state.quantity,
        price: action.payload.price,
      };

      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += state.quantity;
      } else {
        state.cart.push(newItem);
      }

      state.quantity = 1;
    },

    addQuantity: (state) => {
      state.quantity += 1;
    },

    reduceQuantity: (state) => {
      state.quantity = state.quantity > 1 ? state.quantity - 1 : 1;
    },

    calculations: (state) => {
      let count = 0;
      let total = 0;

      state.cart.forEach((product) => {
        count += product.quantity;
        total += product.price * product.quantity;
      });

      state.count = count;
      state.total = total;
      state.vat = total * 0.15;
    },

    emptyCart: (state) => {
      state.cart = [];
      localStorage.clear("cart");
    },
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      existingItem.quantity += 1;
    },
    removeItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        if (state.count === 1) {
          localStorage.clear("cart");
        }
      }
    },
  },
});

export const {
  addToCart,
  addQuantity,
  reduceQuantity,
  calculations,
  emptyCart,
  addItem,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
