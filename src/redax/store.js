import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlise";
import { reduserContacts } from './contactsSlice';
import { reduserUser } from './userSlice';
import { modalReducer } from "./modalSlice";
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, reduserUser),
    contacts: reduserContacts,
    search: filterReducer,
    modal: modalReducer,
  },
  middleware(getDefaultMiddleware) {
      return  getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  }
});

export const persistor = persistStore(store)