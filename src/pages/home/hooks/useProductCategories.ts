import { QUERY_GET_ALL_CATEGORIES } from "@/api/queries";
import { productsStoreActions } from "@/store/redux/products/slice";
import { productCategoriesSelector } from "@/store/redux/selectors";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface UseProductCategories {
  loading: boolean;
  categories?: Miele.ProductCategory[];
  error: unknown;
}

export const useProductCategories = (): UseProductCategories => {
  const categories = useSelector(productCategoriesSelector);
  const dispatch = useDispatch();

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
      dispatch(
        productsStoreActions.setProductCategories(categoriesList.categories)
      );
    }
  }, [categoriesList]);

  return {
    loading: false,
    categories: categoriesList?.categories || categories,
    error,
  };
};
