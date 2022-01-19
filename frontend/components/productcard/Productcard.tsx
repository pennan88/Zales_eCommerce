import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import styles from "./Productcard.module.scss";

interface ProductTypes {
  name: string;
  image: string;
  description: string;
  size: [string];
  price: number;
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

const Productcard = ({
  name,
  image,
  description,
  size,
  price,
}: ProductTypes) => {
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
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <ReactMarkdown children={description} />
        </div>
        <div className={styles.sizeContainer}>
          <h1>Avalible Sizes</h1>
          <div>
            {size.map((size: any) => (
              <motion.h4
                variants={fadeUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {size.Size}
              </motion.h4>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.priceContainer}>{price}:-</div>
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
