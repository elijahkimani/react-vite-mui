import { generateArray } from "@/utils/generateArray";
import { Grid } from "@mui/material";
import ProductTile from "./ProductTile";
import ProductTileSkeleton from "./ProductTileSkeleton";

interface ProductsListProps {
  products?: Miele.Product[];
  loading?: boolean;
}

const ProductsList = (props: ProductsListProps) => {
  const { products = [], loading = false } = props;
  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={5}>
        {loading
          ? generateArray(10).map((x) => {
              return (
                <Grid item key={x}>
                  <ProductTileSkeleton />
                </Grid>
              );
            })
          : products.map((product) => {
              return (
                <Grid item key={product.id}>
                  <ProductTile product={product} />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default ProductsList;
