import { motion } from "framer-motion";
import {
  Enum_Componentextracolor_Color,
  GetOneClothesQuery,
} from "generated/graphql";
import { addCartDispatch } from "lib/redux/dispatch";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import { fadeIn, fadeUp } from "public/animations/framer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Productcard.module.scss";

interface ProductTypes {
  props: GetOneClothesQuery;
}

const Productcard = ({ props }: ProductTypes) => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();

  const router = useRouter();
  const handeColor = (colorIndex: any) => {
    const color = props.clothes!.data[0].attributes!.Colors!.map(
      ({ Color }) => {
        return Color;
      }
    );
    const i = color.indexOf(colorIndex);
    setIndex(i);
  };

  const handeClick = (i: any, color: string) => {
    handeColor(i);
    setColor(color);
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
            src={
              props.clothes?.data[0].attributes?.Image?.data[index]?.attributes
                ?.url
            }
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
          <h1 className={styles.title}>
            {props.clothes?.data[0].attributes?.Name}
          </h1>
        </div>
        <div className={styles.descriptionContainer}>
          <Markdown>{props!.clothes!.data[0].attributes!.LongDesc!}</Markdown>
        </div>
        <div className={styles.sizeContainer}>
          <h1>Avalible Sizes</h1>
          <div>
            {props?.clothes?.data[0].attributes?.Size.map(({ Size }, index) => (
              <motion.h4
                key={index}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => setSize(Size)}
              >
                {Size}
              </motion.h4>
            ))}
          </div>
        </div>
        <div className={styles.colorContainer}>
          <h1>Colors</h1>
          <div>
            {props.clothes?.data[0].attributes?.Colors?.map(
              ({ Color }, index) => {
                return (
                  <motion.h4
                    onClick={() => handeClick(Color, Color!)}
                    key={index}
                    className={[styles.color, styles[`${Color}`]].join(" ")}
                  ></motion.h4>
                );
              }
            )}
          </div>
        </div>
        <div>
          <div className={styles.priceContainer}>
            {props?.clothes?.data[0].attributes?.Price}:-
          </div>
          <div className={styles.btnContainer}>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.btn}
              onClick={() => {
                addCartDispatch(
                  props.clothes?.data[0].attributes?.Name!,
                  props.clothes?.data[0].attributes?.Image?.data[index]
                    ?.attributes?.url!,
                  size,
                  color,
                  props.clothes?.data[0].attributes?.Price!,
                  dispatch
                );
              }}
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
