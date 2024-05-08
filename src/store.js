import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import loginReducer from "./redux/loginSlice";
import selectedItemsReducer from "./Components/ShoppingCart/selectedItemsSlice";
import orderReducer from "./redux/orderSlice";
import preferenceSlice from "./redux/preferenceSlice";
import purchaseReducer from "./redux/purchaseSlice";

const GlobalConfig = {
  key: "login",
  storage: storage,
};

const rootReducer = combineReducers({
  login: persistReducer(GlobalConfig, loginReducer),
  preference: preferenceSlice,
  selectedItems: selectedItemsReducer,
  orderItem: orderReducer,
  purchaseItem: purchaseReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
