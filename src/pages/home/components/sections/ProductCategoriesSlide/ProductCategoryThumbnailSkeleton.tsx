import { Skeleton, styled, useTheme } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  columnGap: 2,
  minWidth: "220px",

  "&> .img-skeleton": {
    height: "75px",
    width: "120px",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
}));

const ProductCategoryThumbnailSkeleton = () => {
  const {
    typography: { subtitle2 },
  } = useTheme();

  return (
    <StyledWrapper>
      <Skeleton
        className="img-skeleton"
        variant="rectangular"
        height={75}
        width={120}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: subtitle2.fontSize, width: 60 }}
      />
    </StyledWrapper>
  );
};

export default ProductCategoryThumbnailSkeleton;
