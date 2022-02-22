import Banner from "@components/Banner/Banner";
import Grid from "@components/gird/Grid";
import Itemcard from "@components/itemcard/Itemcard";
import { PageEntity, ProductEntityResponseCollection } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { queryPage, queryProducts } from "shared/utils/queries";

interface IProps {
  product: ProductEntityResponseCollection;
}

const Shoes = ({ product }: IProps) => {
  return (
    <>
      <Banner Header={""} />
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

  const pageData = await queryPage("shoes", {
    client: client,
  });

  const productData = await queryProducts("Shoes", {
    client: client,
  });
  return {
    props: {
      product: productData,
      page: pageData,
    },
  };
};

export default Shoes;
