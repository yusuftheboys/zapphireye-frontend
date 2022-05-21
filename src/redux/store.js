import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as url } from "./slices/url";
import { reducer as vulnerability } from "./slices/vulnerability";
import { reducer as threatAgent } from "./slices/threatAgent";
import { reducer as technical } from "./slices/technical";
import { reducer as business } from "./slices/business";

const reducers = combineReducers({
  url,
  vulnerability,
  threatAgent,
  technical,
  business,
});

const persistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["url", "threatAgent", "vulnerability", "technical", "business"],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
