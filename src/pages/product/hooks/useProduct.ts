import { QUERY_GET_PRODUCT_BY_ID } from "@/api/queries";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const useProduct = () => {
  const params = useParams();
  const productId = params.productId as string;

  const { isLoading, isFetching, data, error } = useQuery({
    queryKey: ["products", productId],
    queryFn: QUERY_GET_PRODUCT_BY_ID(productId),
  });

  return {
    loading: isLoading || isFetching,
    product: data,
  };
};
