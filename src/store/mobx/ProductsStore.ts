import { action, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class MobxProductsStore {
  @observable products: Miele.Product[] = [];
  @observable categories: Miele.ProductCategory[] = [];

  constructor() {
    // use local storage to persist data stored
    makePersistable(this, {
      name: "mobx:miele-web",
      storage: window.localStorage,
      properties: ["products", "categories"],
    });
  }

  @action
  setProducts(products: Miele.Product[]) {
    this.products = [...products];
  }

  @action
  setProductCategories(categories: Miele.ProductCategory[]) {
    this.categories = [...categories];
  }
}
