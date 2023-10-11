import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import routes from '../../routes';
import HeaderForm from './HeaderForm';
import HeaderFilters from './HeaderFilters';
import { fetchBooks } from '../../store/slices/booksSlice';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.search);

  useEffect(() => {
    params.input && dispatch(fetchBooks(params));
  }, [dispatch, params]);

  return (
    <header className='container-fluid bg-dark pb-5'>
      <div className='row'>
        <div className='col-md-10 col-lg-8 mx-auto text-white'>
          <Link to={routes.rootPage} className='text-decoration-none text-reset'>
            <h1 className='display-3 pt-3 text-center'>{t('headers.homeTitle')}</h1>
          </Link>
          <HeaderForm />
          <HeaderFilters />
        </div>
      </div>
    </header>
  );
};

export default Header;
