import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Cards from './Cards';

const Main = () => {
  const { t } = useTranslation();
  const { loadingStatus, error } = useSelector((state) => state.books);

  return (
    <main role='main' className='container'>
      {loadingStatus === 'loading' && (
        <div className='text-center m-3'>
          <div className='spinner-border' role='status'></div>
        </div>
      )}
      {error && (
        <div className='alert alert-danger text-center m-3' role='alert'>
          {t('errors.netWorkError')}
        </div>
      )}
      <Cards />
    </main>
  );
};

export default Main;
