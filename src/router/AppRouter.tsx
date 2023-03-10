import HomePage from "@/pages/home/home";
import ProductPage from "@/pages/product/product";
import React from "react";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
