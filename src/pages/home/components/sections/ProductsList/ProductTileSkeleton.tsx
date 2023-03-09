import { Box, Skeleton, styled, useTheme } from "@mui/material";
import React from "react";

const StyledWrapper = styled("div")(({ theme }) => ({
  "&> .text": {
    textAlign: "center",
    marginTop: theme.spacing(0.25),
  },
}));

const ProductTileSkeleton = () => {
  const {
    typography: { h6, caption },
  } = useTheme();

  return (
    <StyledWrapper>
      <Skeleton variant="rectangular" height={100} width={180} />
      <Box
        textAlign="center"
        marginTop={0.25}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Skeleton variant="text" sx={{ fontSize: h6.fontSize, width: "60%" }} />
        <Skeleton
          variant="text"
          sx={{ fontSize: caption.fontSize, width: "25%" }}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: caption.fontSize, width: "25%" }}
        />
      </Box>
    </StyledWrapper>
  );
};

export default ProductTileSkeleton;
