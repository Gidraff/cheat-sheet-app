import instance from '../config/axiosConfig';
import jsonwebtoken from 'jsonwebtoken';
import * as actions from './types';



export const registerUser = (userData, history)  => dispatch => {
  instance.post('/api/user/register', userData)
    .then(res => {
      history.push('/Login');
      dispatch({
        type: actions.REGISTER_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actions.REGISTER_USER_FAILURE,
        payload: error.response.data
      });
    });
};

export const loginUser = (userData, history)  => dispatch => {
  instance.post('/api/user/login', userData)
    .then(res => {
      const token = res.data.token;
      const user = jsonwebtoken.decode(token);
      dispatch({
        type: actions.LOGIN_USER_SUCCESS,
        payload: user
      });
      localStorage.setItem('token',token);
      history.push('/cheats');
    }).catch(error => {
      dispatch({
        type: actions.LOGIN_USER_FAILURE,
        payload: error.response
      });
    });
};

export const logoutUser = (history) => dispatch =>{
  localStorage.removeItem('token');
  history.push('/Login');
  dispatch({
    type: actions.LOGOUT_USER_SUCCESS
  });
};
