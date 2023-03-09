import axios from "axios";
import { API_PRODUCTS_GET_ALL, API_PRODUCT_GET_BY_ID } from "../endpoints";

export const QUERY_GET_ALL_PRODUCTS = async () => {
  const response = await axios.get<Miele.ProductList>(
    API_PRODUCTS_GET_ALL.toString()
  );
  return response.data;
};

export const QUERY_GET_PRODUCT_BY_ID = (productId: string) => async () => {
  const response = await axios.get<Miele.Product>(
    API_PRODUCT_GET_BY_ID(productId).toString()
  );
  return response.data;
};
