/*eslint-disable import/default */
import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';
import { loadCompanies } from './actions/companiesActions';
import App from './components/App';

const store = configureStore();
store.dispatch(loadCompanies());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
