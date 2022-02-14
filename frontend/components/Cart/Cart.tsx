import React from "react";
import styles from "./Cart.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <div>
        <AiOutlineShoppingCart />0
      </div>
    </div>
  );
};

export default Cart;
