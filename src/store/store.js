import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './slices/booksSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
  },
});

export default store;
