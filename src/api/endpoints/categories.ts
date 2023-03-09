import { API_BASE_ADDRESS } from "./base";

/** Endpoint to get all categories */
export const API_CATEGORIES_GET_ALL = new URL(
  "/v1/categories",
  API_BASE_ADDRESS
);

/** Endpoint to get all products in a specific category */
export const API_PRODUCTS_IN_CATEGORY = (categoryName: string) =>
  new URL(`/v1/categories/${categoryName}/products`, API_BASE_ADDRESS);
