import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import loginReducer from "./redux/loginSlice";
import selectedItemsReducer from "./Components/ShoppingCart/selectedItemsSlice";
const rootReducer = combineReducers({
  login: loginReducer,
  selectedItems: selectedItemsReducer,
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
