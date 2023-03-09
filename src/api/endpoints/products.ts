import { API_BASE_ADDRESS } from "./base";

/** Endpoint to get all products */
export const API_PRODUCTS_GET_ALL = new URL("/v1/products", API_BASE_ADDRESS);

/** Endpoint to get a specific product by its product id */
export const API_PRODUCT_GET_BY_ID = (productId: string) =>
  new URL(`/v1/products/${productId}`, API_BASE_ADDRESS);
