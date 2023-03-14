import { QUERY_GET_PRODUCT_BY_ID } from "@/api/queries";
import { useProductsStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const useProduct = () => {
  const params = useParams();
  const productId = params.productId as string;
  const product = useProductsStore((state) => state.getProduct(productId));

  const { isLoading, isFetching, data, error } = useQuery({
    queryKey: ["products", productId],
    queryFn: QUERY_GET_PRODUCT_BY_ID(productId),
  });

  const productsInCategory = useProductsStore((state) =>
    state.getProductsInCategory(product?.category)
  );

  return {
    loading: isLoading || isFetching,
    product: data || product,
    productsInCategory,
  };
};
