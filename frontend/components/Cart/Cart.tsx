import React from "react";
import styles from "./Cart.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <Link href="/cart">
        <div>
          <AiOutlineShoppingCart />
          <a>0</a>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
