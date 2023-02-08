import { configureStore } from '@reduxjs/toolkit';
import CryptoSlice from './CryptoSlice';
import DetailSlice from './DetailSlice';

const store = configureStore({
  reducer: {
    list: CryptoSlice,
    detail: DetailSlice,
  },
});

export default store;
