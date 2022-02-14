import { AppDispatch } from "./app/store";
import { addItem } from "./features/cartSlice";
export const addCartDispatch = (amount: number, dispatch: AppDispatch) => {
  dispatch(addItem(amount));
};
