import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as searchActions } from '../../store/slices/searchSlice';

const HeaderFilters = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSelectCategory = (e) => {
    dispatch(searchActions.setCategory(e.target.value));
  };

  const handleSortBy = (e) => {
    dispatch(searchActions.setSort(e.target.value));
  };

  return (
    <form className='form text-body mt-3'>
      <div className='row justify-content-between'>
        <div className='col mt-3'>
          <h6 className='text-white'>{t('buttons.categories')}</h6>
          <select
            id='category'
            name='category'
            className='form-select'
            style={{ cursor: 'pointer' }}
            aria-label='select-category'
            onChange={handleSelectCategory}
          >
            <option defaultValue>{t('headers.all')}</option>
            <option value='art'>{t('headers.art')}</option>
            <option value='biography'>{t('headers.biography')}</option>
            <option value='computers'>{t('headers.computers')}</option>
            <option value='history'>{t('headers.history')}</option>
            <option value='medical'>{t('headers.medical')}</option>
            <option value='poetry'>{t('headers.poetry')}</option>
          </select>
        </div>
        <div className='col mt-3'>
          <h6 className='text-white'>{t('buttons.sort')}</h6>
          <select
            id='sortBy'
            name='sortBy'
            className='form-select'
            style={{ cursor: 'pointer' }}
            aria-label='sorting-by'
            onChange={handleSortBy}
          >
            <option defaultValue>{t('headers.relevance')}</option>
            <option value='newest'>{t('headers.newest')}</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default HeaderFilters;
