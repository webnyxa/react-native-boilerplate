import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import rootReducer from "./reducers";

const persistConfig = {
  key: "Salon",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  version: 1,
  timeout: 0
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
