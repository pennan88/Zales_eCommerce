import style from "./Itemcard.module.scss";
import Image from "next/image";

const Itemcard = ({ title, price, description, image, id }: any) => {
  return (
    <div key={id} className={[style.Item, style.itemGrid].join(" ")}>
      <div className={style.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.contentContainer}>
        <h3 className={style.title}>{title}</h3>
        <h3 className={style.description}>{description}</h3>
        <h3 className={style.price}>{price}</h3>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.btn}>btn</button>
      </div>
    </div>
  );
};

export default Itemcard;
