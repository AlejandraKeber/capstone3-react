import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCrypto = createAsyncThunk(
  'list/fetchCrypto',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins/');
    const data = await response.json();
    return data.coins;
  },
);

const CryptoSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchCrypto.pending]: (state) => {
      state.loading = true;
    },
    [fetchCrypto.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchCrypto.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
     /* eslint-enable */
  },
});

export default CryptoSlice.reducer;
