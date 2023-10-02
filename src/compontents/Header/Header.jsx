import React from 'react';
import { useTranslation } from 'react-i18next';

import HeaderForm from './HeaderForm';
import HeaderFilters from './HeaderFilters';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className='container-fluid bg-dark pb-5'>
      <div className='row'>
        <div className='col-md-10 col-lg-8 mx-auto text-white'>
          <h1 className='display-3 pt-3 text-center'>{t('headers.homeTitle')}</h1>
          <HeaderForm />
          <HeaderFilters />
          <p className='feedback m-0 position-absolute small text-danger'></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
