import { motion } from "framer-motion";
import { Product } from "generated/graphql";
import { addBasketDispatch, addCartDispatch } from "lib/redux/dispatch";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import { fadeIn, fadeUp } from "public/animations/framer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Productcard.module.scss";

interface ProductTypes {
  props: Product;
}

const Productcard = ({ props }: ProductTypes) => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();

  const router = useRouter();
  const handeColor = (colorIndex: any) => {
    const color = props.Colors!.map(({ Color }) => {
      return Color;
    });
    const i = color.indexOf(colorIndex);
    setIndex(i);
  };

  const handeClick = (i: any, color: string) => {
    handeColor(i);
    setColor(color);
  };

  const handlePurchase = () => {
    addCartDispatch(
      props!.Name!,
      props!.Slug!,
      props!.Images?.data[index].attributes?.url!,
      size,
      color,
      props!.Price!,
      dispatch
    ),
      addBasketDispatch(dispatch);
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.productContainer}
    >
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <motion.img
            variants={fadeUp}
            initial="initial"
            animate="animate"
            exit="exit"
            src={props?.Images?.data[index].attributes?.url!}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={styles.exit}
          onClick={() => {
            router.back();
          }}
        >
          X
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{props!.Name}</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <Markdown>{props!.LongDesc!}</Markdown>
        </div>
        <div className={styles.sizeContainer}>
          <h1>Avalible Sizes</h1>
          <div>
            {props!.Sizes!.map(({ Size }, index) => (
              <>
                <motion.a
                  key={index}
                  variants={fadeUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => setSize(Size)}
                >
                  {Size}
                </motion.a>
              </>
            ))}
          </div>
        </div>
        <div className={styles.colorContainer}>
          <h1>Colors</h1>
          <div>
            {props!.Colors?.map(({ Color }, index) => {
              return (
                <motion.h4
                  onClick={() => handeClick(Color, Color!)}
                  key={index}
                  className={[styles.color, styles[`${Color}`]].join(" ")}
                ></motion.h4>
              );
            })}
          </div>
        </div>
        <div>
          <div className={styles.priceContainer}>{props?.Price}:-</div>
          <div className={styles.btnContainer}>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.btn}
              onClick={handlePurchase}
            >
              Purchase
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Productcard;
