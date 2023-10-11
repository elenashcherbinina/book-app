import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import bookApi from '../../utils/bookApi';
import unique from '../../utils/unique';

const initialState = {
  books: [],
  total: null,
  currentBookId: '',
  loadingStatus: 'idle',
  error: null,
  startIndex: 0,
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const response = await axios.get(bookApi(params));
  return response.data;
});

export const fetchMoreBooks = createAsyncThunk('books/fetchMoreBooks', async (params, store) => {
  const startIndex = store.getState().books.startIndex;
  const response = await axios.get(bookApi(params, startIndex));
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setStartIndex: (state, { payload }) => {
      state.startIndex = payload;
    },
    setCurrentBookId: (state, { payload }) => {
      state.currentBookId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = unique(action.payload.items);
        state.total = action.payload.totalItems;
        state.loadingStatus = 'success';
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      })
      .addCase(fetchMoreBooks.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchMoreBooks.fulfilled, (state, action) => {
        state.books = unique([...state.books, ...action.payload.items]);
        state.loadingStatus = 'success';
        state.error = null;
      })
      .addCase(fetchMoreBooks.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
});

export const { actions } = booksSlice;
export default booksSlice.reducer;
