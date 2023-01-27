import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../features/api/apiSlice';
// reducers

export const store = configureStore({
  devTools: true,
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
