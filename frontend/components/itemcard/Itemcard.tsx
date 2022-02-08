import style from "./Itemcard.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import hotDeal from "../../public/images/promotional.png";
import Image from "next/image";
import { fadeInUp } from "public/animations/framer";

interface iItem {
  title: string;
  price: number;
  description: string;
  image?: string;
  slug: string;
  hot: boolean;
}

const Itemcard = ({ price, description, image, slug, hot }: iItem) => {
  return (
    <motion.div
      className={style.item}
      variants={fadeInUp}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {hot && <Image src={hotDeal} alt="" className={style.hotDeal} />}
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
