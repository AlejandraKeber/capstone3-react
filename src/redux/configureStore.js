import { configureStore } from '@reduxjs/toolkit';
import CryptoSlice from './CryptoSlice';

const store = configureStore({
  reducer: {
    list: CryptoSlice,
  },
});

export default store;
