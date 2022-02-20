import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  name: string;
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
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
