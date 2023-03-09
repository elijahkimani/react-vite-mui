declare namespace Miele {
  export interface ProductCategory {
    name: string;
    thumbnail: string;
    image: string;
  }

  export interface ProductCategoriesList {
    categories: ProductCategory[];
  }
}
