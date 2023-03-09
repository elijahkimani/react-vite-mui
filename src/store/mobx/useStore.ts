import { useContext } from "react";
import { MobxStoreContext } from "./StoreProvider";

export const useMobxStore = () => useContext(MobxStoreContext);
