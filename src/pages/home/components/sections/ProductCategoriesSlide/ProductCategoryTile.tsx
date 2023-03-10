import { styled, Typography } from "@mui/material";
import clsx from "clsx";

const StyledWrapper = styled("div")(({ theme }) => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "transparent",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  transition: "all 250ms ease-in-out",

  "&.selected": {
    borderColor: theme.palette.primary.main,
  },
  "& > div": {
    transition: "all 250ms ease-in-out",
    display: "flex",
    alignItems: "center",
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    minWidth: "220px",

    "&:hover": {
      boxShadow: theme.shadows[2],
    },
    "&> img": {
      height: "75px",
      width: "120px",
      transition: "all 250ms ease-in-out",
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
    "&> .MuiTypography-root": {
      marginLeft: theme.spacing(1),
    },
  },
}));

interface ProductCategoryTileProps {
  category: Miele.ProductCategory;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProductCategoryTile = (props: ProductCategoryTileProps) => {
  const { category, onClick, isSelected } = props;

  const handleClick = () => {
    onClick(category.name);
  };

  return (
    <StyledWrapper
      className={clsx({
        selected: isSelected,
      })}
      onClick={handleClick}
    >
      <div>
        <img src={category.thumbnail} />
        <Typography variant="subtitle2">
          <b>{category.name}</b>
        </Typography>
      </div>
    </StyledWrapper>
  );
};

export default ProductCategoryTile;
