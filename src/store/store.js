import { configureStore } from '@reduxjs/toolkit';
//import { filterFavoritesSlice } from './filterSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { eventsReducer } from './eventSlice';

const persistConfig = {
  key: 'events',
  storage,
};

export const store = configureStore({
  reducer: {
    events: persistReducer(persistConfig, eventsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
