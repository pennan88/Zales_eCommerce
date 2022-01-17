import style from "./Itemcard.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

interface iItem {
  title: string;
  price: number;
  description: string;
  image?: string;
  slug: string;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    x: 60,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Itemcard = ({ price, description, image, slug }: iItem) => {
  return (
    <motion.div className={style.item} variants={fadeInUp}>
      <div className={style.imageContainer}>
        <img src={image} alt="product image" />
      </div>
      <div className={style.contentContainer}>
        <h3 className={style.description}>{description}</h3>
        <h3 className={style.price}>{price}:-</h3>
      </div>
      <div className={style.buttonContainer}>
        <Link href={slug}>
          <a className={style.btn}>QUICKVIEW</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Itemcard;
