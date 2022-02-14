import Banner from "@components/Banner/Banner";
import Grid from "@components/gird/Grid";
import Itemcard from "@components/itemcard/Itemcard";
import { PageEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { queryPage } from "shared/utils/queries";

interface IProps {
  page: PageEntity["attributes"];
}

const Shoes = ({ page }: IProps) => {
  return (
    <>
      <Banner Header={""} />
      <Grid>
        {page!.clothes?.data.map((cloth, index) => {
          return <Itemcard hot={false} key={index} props={cloth.attributes} />;
        })}
      </Grid>
    </>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  const pageData = await queryPage("shoes", {
    client: client,
  });
  return {
    props: {
      page: pageData,
    },
  };
};

export default Shoes;
