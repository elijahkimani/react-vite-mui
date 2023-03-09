import React, { createContext } from "react";
import { MobxProductsStore } from "./ProductsStore";

interface MobxStoreState {
  productsStore: MobxProductsStore;
}

export const MobxStoreContext = createContext<MobxStoreState>(undefined!);

interface MobxStoreProviderProps {
  children: React.ReactNode;
}

const MobxStoreProvider = (props: MobxStoreProviderProps) => {
  const { children } = props;

  const store: MobxStoreState = {
    productsStore: new MobxProductsStore(),
  };

  return (
    <MobxStoreContext.Provider value={store}>
      {children}
    </MobxStoreContext.Provider>
  );
};

export default MobxStoreProvider;
