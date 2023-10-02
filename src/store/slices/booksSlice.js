import { createSlice } from '@reduxjs/toolkit';

const initialState = { books: [], total: null, currentBookId: '' };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, { payload }) => {
      state.books = payload;
    },
    addTotalItems: (state, { payload }) => {
      state.total = payload;
    },
    setCurrentBookId: (state, { payload }) => {
      state.currentBookId = payload;
    },
  },
});

export const { actions } = booksSlice;
export default booksSlice.reducer;
