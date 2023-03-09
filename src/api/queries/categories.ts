import axios from "axios";
import { API_CATEGORIES_GET_ALL, API_PRODUCTS_IN_CATEGORY } from "../endpoints";

export const QUERY_GET_ALL_CATEGORIES = async () => {
  const response = await axios.get<Miele.ProductCategoriesList>(
    API_CATEGORIES_GET_ALL.toString()
  );
  return response.data;
};

export const QUERY_GET_PRODUCTS_IN_CATEGORY =
  (categoryName: string) => async () => {
    const response = await axios.get<Miele.ProductList>(
      API_PRODUCTS_IN_CATEGORY(categoryName).toString()
    );
    return response.data;
  };
