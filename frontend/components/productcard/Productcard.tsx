import styles from "./Productcard.module.scss";
import DOMPurify from "dompurify";
import ReactMarkdown from "react-markdown";
import { marked } from "marked";

interface ProductTypes {
  name: string;
  image: string;
  description: string;
  size: [string];
  price: number;
}

const Productcard = ({
  name,
  image,
  description,
  size,
  price,
}: ProductTypes) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
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
              <h4>{size.Size}</h4>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.priceContainer}>{price}:-</div>
          <div className={styles.btnContainer}>
            <div className={styles.btn}>Purchase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
