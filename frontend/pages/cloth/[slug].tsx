import QUERY_CLOTH from "@queries/getOneCloth.graphql";
import styles from "@styles/slug.module.scss";
import { motion } from "framer-motion";
import { GetOneClothesQuery } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import { queryClothes, queryPage } from "shared/utils/queries";
import Productcard from "../../components/productcard/Productcard";

interface IProps {
  cloth: GetOneClothesQuery;
}

const Product = ({ cloth }: IProps) => {
  return (
    <motion.div className={styles.slugContainer}>
      <Productcard props={cloth} />
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const slugs = await queryClothes({
    client: client,
  });
  const paths = slugs!.map(({ attributes }) => ({
    params: { slug: attributes!.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  const slug = params!.slug;

  const pageData = await queryPage("cloth", {
    client: client,
  });

  const { data: clothData } = await client.query({
    query: QUERY_CLOTH,
    variables: { slug },
  });

  return {
    props: {
      page: pageData,
      cloth: clothData,
    },
  };
};

export default Product;
