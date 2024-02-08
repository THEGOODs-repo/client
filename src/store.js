import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import loginReducer from "./redux/loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession, // Corrected import here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
