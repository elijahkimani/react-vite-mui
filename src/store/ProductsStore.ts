import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ProductStoreState {
  products: Miele.Product[];
  productCategories: Miele.ProductCategory[];
  setProducts: (products: Miele.Product[]) => void;
  setProductCategories: (categories: Miele.ProductCategory[]) => void;
}

const useProductsStore = create<ProductStoreState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        productCategories: [],

        setProducts: (products: Miele.Product[]) => {
          set((state) => ({ ...state, products: [...products] }));
        },

        setProductCategories: (categories: Miele.ProductCategory[]) => {
          set((state) => ({ ...state, productCategories: [...categories] }));
        },
      }),
      {
        name: "zustand:miele-web",
      }
    )
  )
);

export { useProductsStore };
