import style from "./Itemcard.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import hotDeal from "../../public/images/promotional.png";
import Image from "next/image";
import { fadeInUp } from "public/animations/framer";
import { ClothEntity } from "generated/graphql";

interface iItem {
  props: ClothEntity["attributes"];
  hot: boolean;
}

const Itemcard = ({ props, hot }: iItem) => {
  return (
    <motion.div
      className={style.item}
      variants={fadeInUp}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {hot && <Image src={hotDeal} alt="" className={style.hotDeal} />}
      <p>{props?.Name}</p>
      <div className={style.imageContainer}>
        <img src={props?.Image?.data[0].attributes?.url} alt="product image" />
      </div>
      <div className={style.contentContainer}>
        <h3 className={style.description}>{props?.ShortDesc}</h3>
        <h3 className={style.price}>{props?.Price}:-</h3>
      </div>
      <div className={style.buttonContainer}>
        <Link href={"cloth/" + props?.Slug!}>
          <a className={style.btn}>QUICKVIEW</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Itemcard;
