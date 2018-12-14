import * as actions from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {

  case actions.REGISTER_USER_SUCCESS:
    return  {
      ...state, isRegistered: true, data: action.payload
    };

  case actions.REGISTER_USER_FAILURE:
    return  {
      ...state, isRegistered: false, data: action.payload
    };
  case actions.LOGIN_USER_SUCCESS:
    return  {
      ...state, isAuthenticated: true, user: action.payload
    };
  case actions.LOGIN_USER_FAILURE:
    return  {
      ...state, isAuthenticated: false, user: null
    };
  case actions.LOGOUT_USER_SUCCESS:
    return  {
      ...state, isAuthenticated: false, user: null
    };

  default:
    break;
  }
  return state;
};

export default authReducer;
