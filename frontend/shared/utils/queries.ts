import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  GetAllProductsQuery,
  GetOneProductQuery,
  GetPageQuery,
  GetProductQuery,
} from "./../../generated/graphql";
import QUERY_PAGE from "@queries/Page.graphql";
import QUERY_PRODUCTS from "@queries/Product.graphql";
import QUERY_ALL_PRODUCTS from "@queries/Products.graphql";
import QUERY_ONE_PRODUCT from "@queries/OneProduct.graphql";

interface IProps {
  client: ApolloClient<NormalizedCacheObject>;
}

export const queryProducts = async (category: string, { client }: IProps) => {
  const { data }: { data: GetProductQuery } = await client.query({
    query: QUERY_PRODUCTS,
    variables: { category },
  });
  return data.products;
};

export const queryAllProducts = async ({ client }: IProps) => {
  const { data }: { data: GetAllProductsQuery } = await client.query({
    query: QUERY_ALL_PRODUCTS,
  });
  return data.products;
};

export const queryOneProduct = async (slug: string, { client }: IProps) => {
  const { data }: { data: GetOneProductQuery } = await client.query({
    query: QUERY_ONE_PRODUCT,
    variables: { slug },
  });

  return data.products?.data[0].attributes;
};

export const queryPage = async (path: string, { client }: IProps) => {
  const { data }: { data: GetPageQuery } = await client.query({
    query: QUERY_PAGE,
    variables: { path },
  });
  return data.pages?.data[0].attributes;
};
