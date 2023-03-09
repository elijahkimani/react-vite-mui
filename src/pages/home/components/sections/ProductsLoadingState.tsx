import { Stack, Skeleton, Divider } from "@mui/material";
import React from "react";

const getArrayBySize = (size: number) => {
  const result = [];
  while (size > 0) {
    result.push(size);
    size--;
  }
  return result;
};

export const TextSkeleton = () => {
  return <Skeleton variant="text" sx={{ fontSize: "1.12rem", width: 150 }} />;
};

const ProductRowLoadingState = () => {
  return (
    <>
      <TextSkeleton />
      <Stack direction="row" spacing={2} overflow="hidden">
        {getArrayBySize(6).map((val) => {
          return (
            <div key={val}>
              <Skeleton variant="rectangular" width={200} height={100} />
              <TextSkeleton />
            </div>
          );
        })}
      </Stack>
    </>
  );
};

const ProductsLoadingState = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        overflow="hidden"
      >
        {getArrayBySize(6).map((val) => {
          return <TextSkeleton key={val} />;
        })}
      </Stack>
      <ProductRowLoadingState />
      <ProductRowLoadingState />
      <ProductRowLoadingState />
    </Stack>
  );
};

export default ProductsLoadingState;
