import Banner from "@components/Banner/Banner";
import Grid from "@components/gird/Grid";
import { GetPagesQuery, PageEntity } from "generated/graphql";
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
        {page!.products?.data[0].attributes?.clothes?.data.map(
          (cloth, index) => {
            return (
              <Itemcard hot={false} key={index} props={cloth.attributes} />
            );
          }
        )}
        {page!.products?.data[0].attributes?.shoes?.data.map((cloth, index) => {
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
