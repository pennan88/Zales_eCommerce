import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  value: number;
}

const initialState: BasketState = {
  value: 0,
};

export const cartBasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state) => {
      state.value++;
    },
    removeBasket: (state) => {
      state.value--;
    },
  },
});

export const { addBasket, removeBasket } = cartBasketSlice.actions;
export default cartBasketSlice.reducer;
