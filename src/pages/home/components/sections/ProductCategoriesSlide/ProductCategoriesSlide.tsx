import { generateArray } from "@/utils/generateArray";
import { Stack, styled } from "@mui/material";
import React from "react";
import ProductCategoryThumbnailSkeleton from "./ProductCategoryThumbnailSkeleton";
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
  loading?: boolean;
}

const ProductCategoriesSlide = (props: ProductCategoriesSlideProps) => {
  const {
    categories = [],
    selectedCategory,
    onCategorySelect,
    loading = false,
  } = props;

  return (
    <StyledStack direction="row" spacing={2} py={2}>
      {loading
        ? generateArray(10).map((x) => {
            return <ProductCategoryThumbnailSkeleton />;
          })
        : categories.map((category) => {
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
