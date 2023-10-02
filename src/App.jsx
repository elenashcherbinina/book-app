import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import routes from './routes';
import Layout from './compontents/pages/Layout';
import HomePage from './compontents/pages/HomePage';
import BookPage from './compontents/pages/BookPage';
import ErrorPage from './compontents/pages/ErrorPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.rootPage} element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path={`${routes.bookPage}/:id`} element={<BookPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
