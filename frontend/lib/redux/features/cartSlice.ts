import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: number;
}

const initialState: CartState = {
  cart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      state.cart + action.payload;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
