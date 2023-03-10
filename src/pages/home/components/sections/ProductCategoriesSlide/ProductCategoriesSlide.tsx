import { generateArray } from "@/utils/generateArray";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { alpha, IconButton, styled } from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ProductCategoryThumbnailSkeleton from "./ProductCategoryThumbnailSkeleton";
import ProductCategoryTile from "./ProductCategoryTile";

const StyledScrollMenuWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  "& .react-horizontal-scrolling-menu--arrow-left, .react-horizontal-scrolling-menu--arrow-right":
    {
      position: "absolute",
      alignItems: "center",
      top: 24,
      zIndex: 2,

      "& .MuiIconButton-root": {
        backgroundColor: alpha(theme.palette.primary.light, 0.25),
        transition: "all 250ms ease-in-out",
        "&:disabled": {
          backgroundColor: theme.palette.action.hover,
          display: "none",
        },
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.light, 0.4),
        },
      },
    },
  "& .react-horizontal-scrolling-menu--arrow-left": {
    marginLeft: -20,
  },
  "& .react-horizontal-scrolling-menu--arrow-right": {
    right: -20,
  },
}));

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <IconButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ChevronRightRounded />
    </IconButton>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <IconButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ChevronLeftRounded />
    </IconButton>
  );
}

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
    <StyledScrollMenuWrapper>
      <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
        {loading
          ? generateArray(10).map((x) => {
              return <ProductCategoryThumbnailSkeleton key={x} />;
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
      </ScrollMenu>
    </StyledScrollMenuWrapper>
  );
};

export default ProductCategoriesSlide;
