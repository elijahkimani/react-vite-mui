import { Typography, styled } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  transition: "all 250ms ease-in-out",

  "&> img": {
    height: "100px",
    width: "180px",
  },
  "&> .text": {
    textAlign: "center",
    marginTop: theme.spacing(0.25),
  },
}));

interface ProductTileProps {
  product: Miele.Product;
}

const ProductTile = (props: ProductTileProps) => {
  const { product } = props;
  return (
    <StyledWrapper>
      <img src={product.thumbnail} loading="lazy" />
      <div className="text">
        <Typography variant="subtitle2">
          <b>{product.title}</b>
        </Typography>
        <Typography variant="caption" color="textSecondary" component="div">
          {product.brand}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="div">
          USD {product.price}
        </Typography>
      </div>
    </StyledWrapper>
  );
};

export default ProductTile;
