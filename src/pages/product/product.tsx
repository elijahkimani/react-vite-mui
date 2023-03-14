import { Grid, Typography, Stack, Box, Button } from "@mui/material";
import { startCase } from "lodash";
import React from "react";
import { ProductImages } from "./components";
import { useProduct } from "./hooks";
import LocalMallRounded from "@mui/icons-material/LocalMallRounded";

const ProductPage = () => {
  const { loading, product, productsInCategory } = useProduct();

  if (!product) return null;

  return (
    <Grid container py={6} px={4} spacing={8}>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ProductImages product={product} />
      </Grid>
      <Grid item lg={8} md={6} sm={12} xs={12}>
        <Stack
          direction="column"
          height="100%"
          justifyContent="space-between"
          spacing={2}
        >
          <div>
            <Stack
              direction="row"
              justifyContent="space-between"
              marginBottom={1}
              alignItems="center"
            >
              <Typography variant="h5">
                <b>{product.title}</b>
              </Typography>
              <Typography variant="h5">
                <b>USD {product.price}</b>
              </Typography>
            </Stack>
            <Typography variant="subtitle2" gutterBottom>
              {startCase(product.category)} - {product.brand}
            </Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.description}</Typography>
          </div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography color="success.main">
              Items available in stock: <b>{product.stock}</b>
            </Typography>
            <Button
              startIcon={<LocalMallRounded />}
              variant="contained"
              color="primary"
            >
              Add Item
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
