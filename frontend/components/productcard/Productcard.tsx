import { motion } from "framer-motion";
import { ClothEntity, GetOneClothesQuery } from "generated/graphql";
import ReactMarkdown from "react-markdown";
import styles from "./Productcard.module.scss";

interface ProductTypes {
  // name: string;
  // image: string;
  // description: string;
  // size: [string];
  // price: number;
  props: GetOneClothesQuery;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const fadeUp = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const Productcard = ({ props }: ProductTypes) => {
  console.log(props.clothes?.data[0].attributes?.Name);
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
              props?.clothes?.data[0].attributes?.Image?.data?.attributes?.name
            }
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            {props.clothes?.data[0].attributes?.Name}
          </h1>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{props?.clothes?.data[0].attributes?.LongDesc}</p>
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
              >
                {Size}
              </motion.h4>
            ))}
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
