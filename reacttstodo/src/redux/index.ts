import { combineReducers } from "redux";
import { tasks } from "./tasks";
import session from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["tasks"],
};

const conbinedReducer = combineReducers({ tasks: tasks.reducer });

const rootReducer = persistReducer(persistConfig, conbinedReducer);

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

export const store = configureStore({
  reducer: rootReducer,
  // middleware: logger, middleware 에러발생
  devTools: true,
});
export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;
