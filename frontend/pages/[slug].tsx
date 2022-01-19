import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Productcard from "../components/productcard/Productcard";
import styles from "../styles/slug.module.scss";
const Product = ({ product }: any) => {
  console.log(product);
  return (
    <motion.div className={styles.slugContainer}>
      <Productcard
        name={product.Name}
        image={`http://localhost:1337${product.Image.data.attributes.url}`}
        description={product.largeDescription}
        size={product.Size}
        price={product.Price}
      />
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/api/clothes/?populate=*");
  const products = await res.json();
  const paths = products.data.map((product: any) => ({
    params: { slug: product.attributes.Slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  console.log(slug);
  const res = await fetch(
    `http://localhost:1337/api/clothes/?filters[slug]=${slug}&populate=*`
  );
  const data = await res.json();
  const product = data;

  return {
    props: { product: product.data[0].attributes },
  };
};

export default Product;
