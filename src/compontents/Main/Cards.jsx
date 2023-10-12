import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Card from './Card';
import { actions as booksActions } from '../../store/slices/booksSlice';
import { fetchMoreBooks } from '../../store/slices/booksSlice';

const PAGINATION_STEP = 30;

const Cards = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.search);
  const { startIndex } = useSelector((state) => state.books);
  const { books, total, loadingStatus } = useSelector((state) => state.books);

  const handleLoadMore = () => {
    const newStartIndex = startIndex + PAGINATION_STEP;
    dispatch(booksActions.setStartIndex(newStartIndex));
    dispatch(fetchMoreBooks(params));
  };

  return (
    <div className='container'>
      <div className='d-flex mt-3 mb-3 justify-content-center'>
        {books.length > 0 && loadingStatus === 'success' ? (
          <h5>
            {total} {t('messages.booksFound')}
          </h5>
        ) : (
          loadingStatus === 'success' && (
            <h5>
              {total} {t('messages.booksNotFound')}
            </h5>
          )
        )}
      </div>
      <div className='row'>
        {books.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
        <div className='text-center mb-3'>
          {books.length > 0 && (
            <button onClick={handleLoadMore} className='btn btn-outline-primary btn-lg'>
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
