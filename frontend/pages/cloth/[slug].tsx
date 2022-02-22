import Productcard from "@components/productcard/Productcard";
import styles from "@styles/slug.module.scss";
import { motion } from "framer-motion";
import { ClothEntity, ProductEntity, ShoeEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import { queryClothes, queryOneProduct, queryPage } from "shared/utils/queries";

interface IProps {
  product: ProductEntity["attributes"];
}

const Product = ({ product }: IProps) => {
  return (
    <motion.div className={styles.slugContainer}>
      <Productcard props={product} />
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const slugs = await queryClothes({
    client: client,
  });
  // console.log(slugs?.shoes?.data[0].attributes?.Name);
  const clothes = slugs!.clothes!.data!.map(({ attributes }) => ({
    params: {
      slug: attributes!.Slug!,
      category: attributes!.Category!.Categories!,
    },
  }));

  const shoes = slugs!.shoes!.data!.map(({ attributes }) => ({
    params: {
      slug: attributes!.Slug!,
      category: attributes?.Category.Categories!,
    },
  }));

  console.log(clothes); // här är den inte undefined
  console.log(shoes); // här är den inte undefined

  return {
    paths: clothes || shoes,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  const slug = params!.slug;
  const category = params!.category; // här är den inte undefined

  console.log("slug", slug);
  console.log("category", category);

  const pageData = await queryPage("cloth", {
    client: client,
  });

  const productData = await queryOneProduct(
    "Shoes", // Vill ha category variabel här
    slug?.toString()!,
    slug?.toString()!,
    {
      client: client,
    }
  );

  return {
    props: {
      page: pageData,
      product: productData,
    },
  };
};

export default Product;
