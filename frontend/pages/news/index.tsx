import Banner from "@components/Banner/Banner";
import Grid from "@components/gird/Grid";
import { ProductEntityResponseCollection } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { queryPage, queryProducts } from "shared/utils/queries";
import Itemcard from "../../components/itemcard/Itemcard";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface IProps {
  product: ProductEntityResponseCollection;
}
const News = ({ product }: IProps) => {
  return (
    <>
      <Banner Header={"All the latest and greatest"} />
      <Grid>
        {product?.data.map(({ attributes }, index) => (
          <Itemcard key={index} props={attributes} />
        ))}
      </Grid>
    </>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  const pageData = await queryPage("news", {
    client: client,
  });

  const productData = await queryProducts("News", {
    client: client,
  });
  return {
    props: {
      product: productData,
      page: pageData,
    },
  };
};

export default News;
