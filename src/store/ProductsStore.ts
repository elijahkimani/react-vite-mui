import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import isNumber from "lodash/isNumber";
import toNumber from "lodash/toNumber";

interface ProductStoreState {
  products: Miele.Product[];
  productCategories: Miele.ProductCategory[];
  setProducts: (products: Miele.Product[]) => void;
  setProductCategories: (categories: Miele.ProductCategory[]) => void;
  getProduct: (id: number | string) => Miele.Product | undefined;
  getProductsInCategory: (name?: string) => Miele.Product[] | undefined;
}

const useProductsStore = create<ProductStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        productCategories: [],

        setProducts: (products: Miele.Product[]) => {
          set((state) => ({ ...state, products: [...products] }));
        },

        getProduct: (id: string | number) => {
          let _id: number;
          if (isNumber(id)) {
            _id = id;
          } else {
            _id = toNumber(id);
          }

          return get().products.find((x) => x.id === _id);
        },

        getProductsInCategory: (name?: string) => {
          if (!name) return;

          return get().products.filter((x) => x.category === name);
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
