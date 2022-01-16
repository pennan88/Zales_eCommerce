import style from "./Itemcard.module.scss";
import Link from "next/link";

interface iItem {
  title: string;
  price: number;
  description: string;
  image?: string;
  slug: string;
}

const Itemcard = ({ title, price, description, image, slug }: iItem) => {
  return (
    <div className={[style.Item, style.itemGrid].join(" ")}>
      <div className={style.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.contentContainer}>
        <h3 className={style.title}>{title}</h3>
        <h3 className={style.description}>{description}</h3>
      </div>
      <div className={style.buttonContainer}>
        <Link href={slug}>
          <a className={style.btn}>Preview</a>
        </Link>
        <h3 className={style.price}>{price}kr</h3>
      </div>
    </div>
  );
};

export default Itemcard;
