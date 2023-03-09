import { Typography, Divider, Grid, Box } from "@mui/material";
import React from "react";
import CategoryThumbnail from "./CategoryThumbnail";

interface ProductCategoryListProps {
  categories?: Miele.ProductCategory[];
}

const ProductCategoryList = (props: ProductCategoryListProps) => {
  const { categories = [] } = props;
  return (
    <Box>
      <Typography variant="subtitle1">
        <b>Product Categories</b>
      </Typography>
      <Divider />
      <Grid container spacing={5} py={2}>
        {categories.map((category) => {
          return (
            <Grid item key={category.name}>
              <CategoryThumbnail category={category} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductCategoryList;
