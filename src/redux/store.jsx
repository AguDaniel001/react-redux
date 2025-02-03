import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import rootReducer from "./rootReducer"

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ['cake', 'iceCream'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools( applyMiddleware(logger, thunk)));
export const persistor = persistStore(store);
export default { store, persistor };