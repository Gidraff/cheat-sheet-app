import instance from '../config/axiosConfig';
import * as actions from './types';

export const fetchCheatSheets = ()  => dispatch => {
  instance.get('/user/cheats')
    .then(res => {
      dispatch({
        type: actions.LOAD_CHEAT_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actions.LOAD_CHEAT_FAILURE,
        payload: error.response
      });
    });
};

export const fetchSingleCheatSheet = (cheatId) => dispatch => {
  instance.get(`/user/cheats/${cheatId}`)
    .then(res => {
      dispatch({
        type: actions.LOAD_SINGLE_CHEAT_SHEET_SUCCESS,
        payload: res.data
      });
    }).catch(error => {
      dispatch({
        type: actions.LOAD_SINGLE_CHEAT_SHEET_FAILURE,
        payload: error.response
      });
    });
};

export const resetSingleCheatSheet = () => dispatch => {
  dispatch({
    type: actions.RESET_SINGLE_CHEAT_SHEET,
    payload: {}
  });
};

export const searchCheat = (searchText) => dispatch => {
  dispatch({
    type: actions.SEARCH_CHEAT,
    payload: searchText
  });
};

export const createCheatSheet = (cheatsData)  => dispatch => {
  instance.post('/user/cheats', cheatsData)
    .then(res => {
      dispatch({
        type: actions.CREATE_CHEAT_SUCCESS,
        payload: res.data.newCheat
      });
    }).catch(error => {
      dispatch({
        type: actions.CREATE_CHEAT_FAILURE,
        payload: error.response
      });
    });
};

export const deleteCheatSheet = (cheatId) => dispatch => {
  instance.delete(`/user/cheats/${cheatId}`)
    .then(res => {
      dispatch({
        type: actions.DELETE_CHEAT_SUCCESS,
        payload: {
          cheatId: cheatId,
          res: res
        }
      });
    }).catch(error => {
      dispatch({
        type: actions.DELETE_CHEAT_FAILURE,
        payload: error.response
      });
    });
};
