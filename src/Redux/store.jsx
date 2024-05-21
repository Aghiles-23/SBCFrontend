import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bankApi } from './bank';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [bankApi.reducerPath]: bankApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bankApi.middleware),
});

setupListeners(store.dispatch);
