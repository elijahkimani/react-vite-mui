import { QUERY_GET_ALL_PRODUCTS } from "@/api/queries";
import { useMobxStore } from "@/store/mobx";
import { productsStoreActions as reduxProductsStoreActions } from "@/store/redux/products/slice";
import { productsSelector as reduxProductsSelector } from "@/store/redux/selectors";
import { useZustandProductsStore } from "@/store/zustand";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface UseProducts {
  loading: boolean;
  products?: Miele.Product[];
  error: unknown;
}

export const useProducts = (): UseProducts => {
  //--- Accessing store values ------
  //redux
  const reduxProducts = useSelector(reduxProductsSelector);
  //redux- hook to update store values
  const dispatch = useDispatch();
  //mobx
  const mobxStore = useMobxStore();
  const mobxProducts = mobxStore.productsStore.products;
  //zustand
  const zustandProducts = useZustandProductsStore((state) => state.products);
  const zustandSetProducts = useZustandProductsStore(
    (state) => state.setProducts
  );

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
      //redux
      dispatch(reduxProductsStoreActions.setProducts(productsList.products));
      //mobx
      mobxStore.productsStore.setProducts(productsList.products);
      //zustand
      zustandSetProducts(productsList.products);
    }
  }, [productsList]);

  return {
    loading: isLoading || isFetching,
    products: productsList?.products || reduxProducts,
    error,
  };
};
