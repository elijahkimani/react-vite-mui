import { QUERY_GET_ALL_PRODUCTS } from "@/api/queries";
import { useProductsStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export interface UseProducts {
  loading: boolean;
  products?: Miele.Product[];
  error: unknown;
}

export const useProducts = (): UseProducts => {
  //--- Accessing store values ------
  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);

  const {
    isLoading,
    isFetching,
    data: productsList,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: QUERY_GET_ALL_PRODUCTS,
  });

  useEffect(() => {
    if (productsList && productsList.products) {
      //--- Updating store values ------
      setProducts(productsList.products);
    }
  }, [productsList]);

  return {
    loading: isLoading || isFetching,
    products: productsList?.products || products,
    error,
  };
};
