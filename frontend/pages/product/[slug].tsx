import Productcard from "@components/productcard/Productcard";
import styles from "@styles/slug.module.scss";
import { motion } from "framer-motion";
import { Product, ProductEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  queryAllProducts,
  queryOneProduct,
  queryPage,
} from "shared/utils/queries";

interface IProps {
  product: ProductEntity["attributes"];
}

const Product = ({ product }: IProps) => {
  return (
    <motion.div className={styles.slugContainer}>
      <Productcard props={product!} />
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const product = await queryAllProducts({
    client: client,
  });

  const paths = product!.data!.map(({ attributes }) => ({
    params: {
      slug: attributes?.Slug!,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  const slug = params!.slug;

  const pageData = await queryPage("product", {
    client: client,
  });

  const productData = await queryOneProduct(slug?.toString()!, {
    client: client,
  });

  return {
    props: {
      page: pageData,
      product: productData,
    },
  };
};

export default Product;
