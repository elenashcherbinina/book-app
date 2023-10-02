import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Card from './Card';

const Cards = () => {
  const { t } = useTranslation();
  const { books, total } = useSelector((state) => state.books);

  return (
    <div className='container-xl'>
      {total && (
        <div className='d-flex mt-3 mb-3 justify-content-center'>
          <h5>
            {total} {t('messages.booksFound')}
          </h5>
        </div>
      )}
      <div className='row'>
        {books.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
