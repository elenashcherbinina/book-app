import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from '../../routes';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className='h-100 container-fluid'>
      <div className='justify-content-center align-items-center h-100 row'>
        <div className='md-12 text-center col'>
          <span className='display-1 d-block'>{t('headers.404')}</span>
          <div className='mb-4 lead'>{t('messages.pageNotFound')}</div>
          <Link to={routes.rootPage}>{t('buttons.backHome')}</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
