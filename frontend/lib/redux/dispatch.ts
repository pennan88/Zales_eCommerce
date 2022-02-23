import { AppDispatch } from "./app/store";
import { addBasket, removeBasket } from "./features/basketSlice";
import { addCart, removeCart } from "./features/cartSlice";

export const addCartDispatch = (
  name: string,
  slug: string,
  image: string,
  size: string,
  color: string,
  price: number,
  dispatch: AppDispatch
) => {
  dispatch(
    addCart({
      name: name,
      slug: slug,
      image: image,
      size: size,
      color: color,
      price: price,
    })
  );
};

export const removeCartDispatch = (name: string, dispatch: AppDispatch) => {
  dispatch(removeCart(name));
};

export const addBasketDispatch = (dispatch: AppDispatch) => {
  dispatch(addBasket());
};
export const removeBasketDispatch = (dispatch: AppDispatch) => {
  dispatch(removeBasket());
};
