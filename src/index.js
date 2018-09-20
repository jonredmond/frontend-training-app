import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import './sass/reset.css';
import traderDesktop from './reducers';
import {
  fetchInstruments,
  fetchOrders,
  fetchUsers,
  initialiseWebsocket,
  createMultipleOrders,
  deleteOrders,
} from './actions';
import App from './components/app';

const loggerMiddleware = createLogger()

const store = createStore(
  traderDesktop,
  applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware
  )
);

store.dispatch(fetchInstruments());
store.dispatch(fetchOrders());
store.dispatch(fetchUsers());

store.dispatch(initialiseWebsocket());

store.dispatch(deleteOrders());
store.dispatch(createMultipleOrders(20));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);