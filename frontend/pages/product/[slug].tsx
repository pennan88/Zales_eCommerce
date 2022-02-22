import Productcard from "@components/productcard/Productcard";
import styles from "@styles/slug.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Product, ProductEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import {
  queryAllProducts,
  queryOneProduct,
  queryPage,
} from "shared/utils/queries";
import { add, remove } from "./Component/array-utils";
import { CloseButton } from "./Component/CloseButton";

interface IProps {
  product: ProductEntity["attributes"];
}

const Product = ({ product }: IProps) => {
  const [notifications, setNotifications] = useState([0]);
  return (
    <motion.div className={styles.slugContainer}>
      <Productcard
        props={product!}
        onClick={() => setNotifications(add(notifications))}
      />
      <ul className={styles.ulNotification}>
        <AnimatePresence>
          {notifications.map((id) => (
            <motion.li
              className={styles.notification}
              key={id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              {product?.Name} purchased
              <CloseButton
                close={() => setNotifications(remove(notifications, id))}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
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
