import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Cards from './Cards';
import bookApi from '../../utils/bookApi';
import { actions as booksActions } from '../../store/slices/booksSlice';

const Main = () => {
  const params = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(bookApi(params));
        dispatch(booksActions.addBooks(data.items));
        dispatch(booksActions.addTotalItems(data.totalItems));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch, params]);

  return (
    <main role='main'>
      <Cards />
    </main>
  );
};

export default Main;
