import style from "./Itemcard.module.scss";

interface iItem {
  title: string;
  price: number;
  description: string;
  image?: string;
}

const Itemcard = ({ title, price, description, image }: iItem) => {
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
        <div className={style.btn}>Preview</div>
        <h3 className={style.price}>{price}kr</h3>
      </div>
    </div>
  );
};

export default Itemcard;
