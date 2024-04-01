import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/basketSlice';
import headphonesSlice from './slice/headphonesSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    heaadphones: headphonesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
