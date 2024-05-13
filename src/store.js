import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import expireReducer from "redux-persist-expire";
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
  transforms: [
    expireReducer("login", {
      expireSeconds: 3600,
      autoExpire: true,
      persistedAtKey: "auth_exp",
      expiredState: { token: null, expire: null },
    }),
  ],
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
  blacklist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
