import { RootState } from "lib/redux/app/store";
import { removeBasketDispatch, removeCartDispatch } from "lib/redux/dispatch";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";

const index = () => {
  const [fullCost, setFullCost] = useState(0) as any;
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    removeCartDispatch(name, dispatch);
    removeBasketDispatch(dispatch);
  };
  useEffect(() => {
    const sum = cart.map((price) => price.price).reduce((a, b) => a + b);
    setFullCost(sum);
  }, []);

  return (
    <ul className={styles.tableContainer}>
      <li className={styles.header}>
        <div className={[styles.col, styles.col1].join(" ")}>Name</div>
        <div className={[styles.col, styles.col2].join(" ")}>Image</div>
        <div className={[styles.col, styles.col3].join(" ")}>Size</div>
        <div className={[styles.col, styles.col4].join(" ")}>Color</div>
        <div className={[styles.col, styles.col5].join(" ")}>Price</div>
      </li>

      {cart.map((cart, index) => {
        return (
          <>
            <li key={index} className={styles.content}>
              <div className={[styles.col, styles.col1].join(" ")}>
                {cart.name}
              </div>
              <div className={[styles.col, styles.col2].join(" ")}>
                <img src={cart.image} />
              </div>
              <div className={[styles.col, styles.col3].join(" ")}>
                {cart.size}
              </div>
              <div className={[styles.col, styles.col4].join(" ")}>
                {cart.color}
              </div>
              <div className={[styles.col, styles.col5].join(" ")}>
                {cart.price}kr
              </div>

              <div className={[styles.slideRemove].join(" ")}>
                <div
                  className={styles.slide}
                  onClick={() => handleRemove(cart.name)}
                >
                  Remove
                </div>
              </div>

              <div className={[styles.slideInspect].join(" ")}>
                <Link href={"product/" + cart.slug}>
                  <a className={styles.slide}>Inspect</a>
                </Link>
              </div>
            </li>
          </>
        );
      })}
      <li className={styles.content}>
        <div className={[styles.col, styles.col1].join(" ")}></div>
        <div className={[styles.col, styles.col2].join(" ")}></div>
        <div className={[styles.col, styles.col3].join(" ")}></div>
        <div className={[styles.col, styles.col4].join(" ")}></div>
        <div className={[styles.col, styles.col5].join(" ")}>{fullCost}kr</div>
      </li>
    </ul>
  );
};

export default index;
