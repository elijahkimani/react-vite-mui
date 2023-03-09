import { QUERY_GET_ALL_CATEGORIES } from "@/api/queries";
import { useProductsStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export interface UseProductCategories {
  loading: boolean;
  categories?: Miele.ProductCategory[];
  error: unknown;
}

export const useProductCategories = (): UseProductCategories => {
  const categories = useProductsStore((state) => state.productCategories);
  const setProductCategories = useProductsStore(
    (state) => state.setProductCategories
  );

  const {
    isLoading,
    isFetching,
    data: categoriesList,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: QUERY_GET_ALL_CATEGORIES,
  });

  useEffect(() => {
    if (categoriesList && categoriesList.categories) {
      setProductCategories(categoriesList.categories);
    }
  }, [categoriesList]);

  return {
    loading: isLoading || isFetching,
    categories: categoriesList?.categories || categories,
    error,
  };
};
