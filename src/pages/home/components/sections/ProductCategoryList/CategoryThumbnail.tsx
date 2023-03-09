import { Typography, styled } from "@mui/material";
import React from "react";

const StyledWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  transition: "all 250ms ease-in-out",

  "&:hover": {
    "&> img": {
      boxShadow: theme.shadows[3],
    },
  },
  "&> img": {
    borderRadius: theme.shape.borderRadius,
    height: "130px",
    width: "200px",
    boxShadow: theme.shadows[1],
    transition: "all 250ms ease-in-out",
  },
}));

interface CategoryThumbnailProps {
  category: Miele.ProductCategory;
}

const CategoryThumbnail = (props: CategoryThumbnailProps) => {
  const { category } = props;
  return (
    <StyledWrapper>
      <img src={category.thumbnail} />
      <Typography variant="subtitle2">
        <b>{category.name}</b>
      </Typography>
    </StyledWrapper>
  );
};

export default CategoryThumbnail;
