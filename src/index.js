import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as moment from 'moment';
import 'moment/locale/ru';

import store from './store';

import App from './App';

import './index.css';

moment.locale('ru');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
