import { Box, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import {
  ActionCardsSection,
  ProductCategoriesSlide,
  ProductsLoadingState,
  ProductsList,
} from "./components";
import { useProducts, useProductCategories } from "./hooks";

function HomePage() {
  const { products, loading: loadingProducts } = useProducts();
  const { categories, loading: loadingCategories } = useProductCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectedProducts = useMemo(() => {
    if (selectedCategory) {
      return products?.filter((x) => x.category === selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <Box p={3}>
      <Stack direction="column" spacing={2}>
        <ActionCardsSection />
        {loadingCategories ? (
          <ProductsLoadingState />
        ) : (
          <>
            <ProductCategoriesSlide
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              categories={categories}
            />
            <ProductsList products={selectedProducts} />
          </>
        )}
      </Stack>
    </Box>
  );
}

export default HomePage;
