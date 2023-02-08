import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetail = createAsyncThunk(
  'detail/fetchDetail',
  async (id) => {
    const response = await fetch(
      `https://api.coinstats.app/public/v1/coins/${id}`,
    );
    const data = await response.json();
    return data.coin;
  },
);

const DetailSlice = createSlice({
  name: 'detail',
  initialState: {
    detail: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchDetail.pending]: (state) => {
      state.loading = true;
    },
    [fetchDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    },
    /* eslint-enable */
  },
});

export default DetailSlice.reducer;
