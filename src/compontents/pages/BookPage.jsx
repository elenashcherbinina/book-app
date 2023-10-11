import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import routes from '../../routes';
import noImage from '../../images/no-image.svg';

const BookPage = () => {
  const navigate = useNavigate();
  const { books, currentBookId } = useSelector((state) => state.books);
  const currentBook = books.find(({ id }) => currentBookId === id);

  const title = currentBook.volumeInfo?.title;
  const authors = currentBook.volumeInfo?.authors?.join(', ');
  const categories = currentBook.volumeInfo?.categories?.join('/ ');
  const imageSrc = currentBook.volumeInfo?.imageLinks?.thumbnail
    ? currentBook.volumeInfo.imageLinks.thumbnail
    : noImage;
  const description = currentBook.volumeInfo?.description;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate(routes.bookList);
  };

  return (
    <div className='container-fluid'>
      <div className='row g-5'>
        <div className='col-md-5 col-12 p-5 bg-light d-flex justify-content-center'>
          <img className='shadow' height='400' src={imageSrc} alt='book-cover' />
        </div>
        <div className='col-md-7 col-12 p-5'>
          <p>
            <small>{categories}</small>
          </p>
          <h3 className='fw-bold mb-2'>{title}</h3>
          <p className='mb-4 text-decoration-underline text-muted'>{authors}</p>
          {description && <div className='border rounded p-4'>{description}</div>}
          <button onClick={handleBackClick} className='btn btn-dark  mt-3'>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
