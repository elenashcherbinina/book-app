import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Card from './Card';
import { actions as booksActions } from '../../store/slices/booksSlice';
import { fetchMoreBooks } from '../../store/slices/booksSlice';

const Cards = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.search);
  const { startIndex } = useSelector((state) => state.books);
  const { books, total } = useSelector((state) => state.books);
  const paginationStep = books.length;
  console.log('books', books);

  const handleLoadMore = () => {
    const newStartIndex = startIndex + paginationStep;
    dispatch(booksActions.setStartIndex(newStartIndex));
    dispatch(fetchMoreBooks(params));
  };

  return (
    <div className='container'>
      <div className='d-flex mt-3 mb-3 justify-content-center'>
        {books.length > 0 ? (
          <h5>
            {total} {t('messages.booksFound')}
          </h5>
        ) : (
          <h5>
            {total} {t('messages.booksNotFound')}
          </h5>
        )}
      </div>
      <div className='row'>
        {books &&
          books.map((book) => {
            return <Card key={book.id} book={book} />;
          })}
        <div className='text-center mb-3'>
          <button onClick={handleLoadMore} className='btn btn-outline-primary btn-lg'>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
