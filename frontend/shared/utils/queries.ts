import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  GetPagesQuery,
  GetProductsQuery,
  GetSpecifcProductsQuery,
} from "./../../generated/graphql";
import QUERY_PAGE from "@queries/Page.graphql";
import QUERY_CLOTHES from "@queries/Cloth.graphql";
import QUERY_CLOTH from "@queries/getOneCloth.graphql";

interface IProps {
  client: ApolloClient<NormalizedCacheObject>;
}

export const queryClothes = async ({ client }: IProps) => {
  const { data }: { data: GetProductsQuery } = await client.query({
    query: QUERY_CLOTHES,
  });

  return data.products?.data[0].attributes;
};

export const queryOneProduct = async (
  product: string,
  clothesSlug: string,
  shoesSlug: string,
  { client }: IProps
) => {
  const { data }: { data: GetSpecifcProductsQuery } = await client.query({
    query: QUERY_CLOTH,
    variables: { product, clothesSlug, shoesSlug },
  });
  return data.products?.data[0].attributes;
};

export const queryPage = async (path: string, { client }: IProps) => {
  const { data }: { data: GetPagesQuery } = await client.query({
    query: QUERY_PAGE,
    variables: { path },
  });
  return data!.pages!.data[0].attributes;
};
