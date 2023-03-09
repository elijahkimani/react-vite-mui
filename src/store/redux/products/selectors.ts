export const productsSelector = (state: Miele.Store.State) =>
  state.productsModule?.products;

export const productCategoriesSelector = (state: Miele.Store.State) =>
  state.productsModule?.productCategories;
