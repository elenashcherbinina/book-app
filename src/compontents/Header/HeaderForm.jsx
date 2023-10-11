import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { actions as searchActions } from '../../store/slices/searchSlice';
import routes from '../../routes';

const HeaderForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('input').trim();
    dispatch(searchActions.setInput(value));
    navigate(routes.bookList);
  };

  return (
    <form onSubmit={handleSubmit} className='form text-body mt-3'>
      <div className='row justify-content-between'>
        <div className='col'>
          <div className='form-floating'>
            <input
              id='input'
              autoFocus
              required
              name='input'
              aria-label='input'
              className='form-control w-100'
              placeholder={t('placeholders.enterBook')}
              autoComplete='off'
            />
            <label htmlFor='input'>{t('placeholders.enterBook')}</label>
          </div>
        </div>
        <div className='col-auto'>
          <button
            type='submit'
            aria-label='search'
            className='h-100 btn btn-lg btn-primary px-sm-5 submit'
          >
            {t('buttons.search')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderForm;
