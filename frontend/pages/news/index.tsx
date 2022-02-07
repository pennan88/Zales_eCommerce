import Grid from "@components/gird/Grid";
import { motion } from "framer-motion";
import { ClothEntity, PageEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { queryClothes, queryPage } from "shared/utils/queries";
import Itemcard from "../../components/itemcard/Itemcard";
import style from "./News.module.scss";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface IProps {
  page: PageEntity["attributes"];
  clothes: ClothEntity[];
}

const News = ({ page, clothes }: IProps) => {
  console.log(clothes[0].attributes?.Image?.data?.attributes?.url);
  return (
    <Grid>
      {clothes &&
        clothes!.map((cloth, index) => {
          return (
            <Itemcard
              key={index}
              slug={"cloth/" + cloth.attributes?.Slug}
              title={cloth.attributes!.Name}
              price={cloth.attributes!.Price}
              description={cloth.attributes!.ShortDesc!}
              image={`//localhost:1337${cloth.attributes?.Image?.data?.attributes?.url}`}
            />
          );
        })}
    </Grid>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  const pageData = await queryPage("news", {
    client: client,
  });
  const clothesData = await queryClothes({
    client: client,
  });
  return {
    props: {
      page: pageData,
      clothes: clothesData,
    },
  };
};

export default News;
