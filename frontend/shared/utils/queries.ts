import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GetClothesQuery, GetPagesQuery } from "./../../generated/graphql";
import QUERY_PAGE from "@queries/Page.graphql";
import QUERY_CLOTHES from "@queries/Cloth.graphql";

interface IProps {
  client: ApolloClient<NormalizedCacheObject>;
}

export const queryClothes = async ({ client }: IProps) => {
  const { data }: { data: GetClothesQuery } = await client.query({
    query: QUERY_CLOTHES,
  });

  return data.clothes?.data;
};

export const queryPage = async (path: string, { client }: IProps) => {
  const { data }: { data: GetPagesQuery } = await client.query({
    query: QUERY_PAGE,
    variables: { path },
  });
  return data!.pages!.data[0].attributes;
};
