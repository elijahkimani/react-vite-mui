import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Miele.Store.ProductsState = {};

const productsSlice = createSlice({
  initialState: initialState,
  name: "@@products",
  reducers: {
    setProductCategories: (
      state,
      action: PayloadAction<Miele.ProductCategory[]>
    ) => {
      state.productCategories = action.payload;
    },
    setProducts: (state, action: PayloadAction<Miele.Product[]>) => {
      state.products = action.payload;
    },
    initializeState: () => initialState,
  },
});

export const productsStoreActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
