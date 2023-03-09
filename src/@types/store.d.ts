declare namespace Miele.Store {
  export interface ProductsState {
    productCategories?: Miele.ProductCategory[];
    products?: Miele.Product[];
  }

  export interface State {
    productsModule: ProductsState;
  }
}
