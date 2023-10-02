import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  category: 'all',
  sortBy: 'relevance',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.input = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setSort: (state, { payload }) => {
      state.sortBy = payload;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
