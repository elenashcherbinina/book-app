import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import initApp from './init';
import store from './store/store';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const init = await initApp();
  root.render(<Provider store={store}>{init}</Provider>);
};

app();
