import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from "./tasks";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import session from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["tasks"],
};

const conbinedReducer = combineReducers({ tasks });

const rootReducer = persistReducer(persistConfig, conbinedReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof rootReducer>;
