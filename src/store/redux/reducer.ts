import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/slice";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  productsModule: productsReducer,
});

const persistConfig: PersistConfig<Miele.Store.State> = {
  key: "miele-web/root",
  version: 1.1,
  storage: storage,
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
