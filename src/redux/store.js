import contactReducer from "./contact/contact-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import persistReducer from "redux-persist/es/persistReducer";

// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { reduce } from "async";

// const store = createStore(rootReducer, composeWithDevTools());

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const persistReducers = persistReducer(
//   persistConfig,
//   combineReducers({
//     contact: contactReducer,
//   })
// );

const store = configureStore({
  reducer: {
    contact: persistReducer(persistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const stor = { store, persistor };

export default stor;
