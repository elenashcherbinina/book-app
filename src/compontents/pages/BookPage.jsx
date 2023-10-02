import React from 'react';
import { useSelector } from 'react-redux';

const BookPage = () => {
  const { books, currentBookId } = useSelector((state) => state.books);
  const currentBook = books.find(({ id }) => currentBookId === id);

  const title = currentBook.volumeInfo?.title;
  const authors = currentBook.volumeInfo?.authors?.join(', ');
  const categories = currentBook.volumeInfo?.categories?.join('/ ');
  const imageSrc = currentBook.volumeInfo?.imageLinks?.thumbnail;
  const description = currentBook.volumeInfo?.description;

  return (
    <div className='container-fluid h-100'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-lg-3 m-4'>
          <img
            className='rounded m-3'
            style={{ height: '80%', width: '80%' }}
            src={imageSrc}
            alt='book-cover'
          />
        </div>
        <div className='col-lg-6 m-4'>
          <p>
            <small>{categories}</small>
          </p>
          <h3 className='fw-bold mb-4'>{title}</h3>
          <p className='mb-4 text-decoration-underline text-muted'>{authors}</p>
          {description && <div className='border rounded p-4'>{description}</div>}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
