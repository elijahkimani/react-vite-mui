import React from "react";
import { useProduct } from "./hooks";

const ProductPage = () => {
  const { loading, product } = useProduct();
  return <div>ProductPage</div>;
};

export default ProductPage;
