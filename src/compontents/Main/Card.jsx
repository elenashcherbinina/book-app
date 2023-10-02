import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import routes from '../../routes';
import { actions as booksActions } from '../../store/slices/booksSlice';

const Card = ({ book }) => {
  const { id, volumeInfo } = book;
  const title = volumeInfo.title;
  const authors = volumeInfo?.authors?.join(', ');
  const categories = volumeInfo.categories?.[0];
  const imageSrc = volumeInfo.imageLinks?.thumbnail;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(booksActions.setCurrentBookId(id));
    navigate(`${routes.bookPage}/${id}`);
  };

  return (
    <div className='col-3 d-flex align-items-stretch'>
      <div
        onClick={handleClick}
        className='card w-100 shadow-sm mb-5 bg-light'
        style={{ transition: '0.5s', cursor: 'pointer' }}
      >
        <img
          className='card-img-top mt-3 rounded mx-auto'
          style={{ height: '50%', width: '50%' }}
          src={imageSrc}
          alt='cover'
        />
        <div className='card-body'>
          <p className='card-subtitle mb-2 underline text-muted'>
            <small>
              <u>{categories}</u>
            </small>
          </p>
          <p className='card-title fw-bold'>{title}</p>
          <p className='card-text'>
            <small>{authors}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
