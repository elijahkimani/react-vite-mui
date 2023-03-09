import { Stack, styled } from "@mui/material";
import React from "react";
import ProductCategoryTile from "./ProductCategoryTile";

const StyledStack = styled(Stack)(({ theme }) => ({
  overflowX: "scroll",
  scrollbarWidth: "none",
  backgroundColor: theme.palette.action.hover,
  "&::-webkit-scrollbar": { display: "none" },
}));

interface ProductCategoriesSlideProps {
  categories?: Miele.ProductCategory[];
  selectedCategory: string;
  onCategorySelect: (name: string) => void;
}

const ProductCategoriesSlide = (props: ProductCategoriesSlideProps) => {
  const { categories = [], selectedCategory, onCategorySelect } = props;

  return (
    <StyledStack direction="row" spacing={2} py={2}>
      {categories.map((category) => {
        return (
          <ProductCategoryTile
            isSelected={category.name === selectedCategory}
            onClick={onCategorySelect}
            key={category.name}
            category={category}
          />
        );
      })}
    </StyledStack>
  );
};

export default ProductCategoriesSlide;
