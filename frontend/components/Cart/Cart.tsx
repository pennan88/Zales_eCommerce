import React from "react";
import styles from "./Cart.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "lib/redux/app/store";

const Cart = () => {
  const amount = useSelector((state: RootState) => state.basket.value);
  let theme: string;
  amount < 1 ? (theme = styles.disabled) : (theme = styles.enabled);

  return (
    <div className={[styles.cartContainer].join(" ")}>
      <Link href="/cart">
        <div className={theme}>
          <AiOutlineShoppingCart />
          <a>{amount}</a>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
