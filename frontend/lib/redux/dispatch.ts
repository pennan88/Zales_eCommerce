import { AppDispatch } from "./app/store";
import { addCart } from "./features/cartSlice";
export const addCartDispatch = (
  name: string,
  image: string,
  size: string,
  color: string,
  price: number,
  dispatch: AppDispatch
) => {
  dispatch(
    addCart({
      name: name,
      image: image,
      size: size,
      color: color,
      price: price,
    })
  );
};
