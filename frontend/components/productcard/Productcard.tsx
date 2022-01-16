import styles from "./Productcard.module.scss";

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
    <div className={styles.productCard}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>{name}</h1>
        </div>
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>

        <div className={styles.extrasContainer}>
          <div className={styles.descriptionContainer}>
            <h4>{description}</h4>
          </div>

          <div className={styles.sizeContainer}>
            <h1>Avalible sizes</h1>
            <div>
              {size.map((size: any) => (
                <h4>{size.Size}</h4>
              ))}
            </div>
          </div>

          <div className={styles.priceContainer}>
            <h4>Price: {price}kr</h4>
          </div>
        </div>
      </div>

      <div className={styles.btnContainer}>
        <div className={styles.btn}>Purchase</div>
      </div>
    </div>
  );
};

export default Productcard;
