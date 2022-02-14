import React from "react";
import styles from "./Cart.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ amount }: any) => {
  return (
    <div className={styles.cartContainer}>
      <div>
        <AiOutlineShoppingCart />
        <p>{amount}kr</p>
      </div>
    </div>
  );
};

export default Cart;
