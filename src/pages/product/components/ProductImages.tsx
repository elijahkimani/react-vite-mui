import { styled } from "@mui/material";
import Carousel from "nuka-carousel/lib/carousel";

const StyledImageWrapper = styled("div")(({ theme }) => ({
  maxHeight: "45vh",
  "& > img": {
    objectFit: "cover",
  },
}));

interface ProductImagesProps {
  product: Miele.Product;
}

const ProductImages = (props: ProductImagesProps) => {
  const { product } = props;

  return (
    <Carousel autoplay slidesToShow={1}>
      {product.images.map((x, index) => {
        return (
          <StyledImageWrapper key={index}>
            <img src={x} key={index} />
          </StyledImageWrapper>
        );
      })}
    </Carousel>
  );
};

export default ProductImages;
