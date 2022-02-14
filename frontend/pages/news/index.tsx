import Banner from "@components/Banner/Banner";
import Grid from "@components/gird/Grid";
import { PageEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { queryPage } from "shared/utils/queries";
import Itemcard from "../../components/itemcard/Itemcard";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface IProps {
  page: PageEntity["attributes"];
}

const News = ({ page }: IProps) => {
  return (
    <>
      <Banner Header={"All the latest and greatest"} />
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

  const pageData = await queryPage("news", {
    client: client,
  });
  return {
    props: {
      page: pageData,
    },
  };
};

export default News;
