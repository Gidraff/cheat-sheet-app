import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import jsonwebtoken from 'jsonwebtoken';
import store from './store/store';
import * as actionsTypes from './actions/types';
import * as actions from './actions/cheatActions';
import * as serviceWorker from './serviceWorker';

const token = localStorage.getItem('token');
if(token) {
  const user = jsonwebtoken.decode(token);
  store.dispatch({
    type: actionsTypes.LOGIN_USER_SUCCESS,
    payload: user
  });
  store.dispatch(actions.fetchCheatSheets());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
