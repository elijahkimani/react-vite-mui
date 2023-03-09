import { Grid } from "@mui/material";
import ProductTile from "./ProductTile";

interface ProductsListProps {
  products?: Miele.Product[];
}

const ProductsList = (props: ProductsListProps) => {
  const { products = [] } = props;
  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={5}>
        {products.map((product) => {
          return (
            <Grid item>
              <ProductTile product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsList;
