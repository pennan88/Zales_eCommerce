import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  name: string;
  slug: string;
  image: string;
  size: string;
  color: string;
  price: number;
}
interface CartState {
  value: Cart[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Cart>) => {
      state.value.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex((i) => {
        return i.name === action.payload;
      });
      state.value.splice(index, 1);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
