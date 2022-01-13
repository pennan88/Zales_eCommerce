import style from "./News.module.scss";
import Itemcard from "../../components/itemcard/Itemcard";
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

const News = ({ products }) => {
  return (
    <div className={[style.newsWrapper, style.grid].join(" ")}>
      {products.map(({ id, title, price, description, image }) => {
        return (
          <Itemcard
            key={id}
            title={title}
            price={price}
            description={description}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default News;
