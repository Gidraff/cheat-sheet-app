import instance from '../config/axiosConfig';
import * as actions from './types';

export const fetchAllcheatCommands = (cheatId)  => dispatch => {
  instance.get(`/user/cheats/${cheatId}/commands`)
    .then(res => {
      dispatch({
        type: actions.LOAD_COMMANDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actions.LOAD_COMMANDS_FAILURE,
        payload: error.response
      });
    });
};

export const deleteCommand = (cheatId, commandId) => dispatch => {
  instance.delete(`/user/cheats/${cheatId}/commands/${commandId}`)
    .then(res => {
      dispatch({
        type: actions.DELETE_COMMAND_SUCCESS,
        payload: {
          commandId: commandId,
          data: res
        }
      });
    }).catch(error => {
      dispatch({
        type: actions.DELETE_COMMAND_FAILURE,
        payload: error.response
      });
    });
};

export const addCommand = (commandData, cheatId)  => dispatch => {
  instance.post(`/user/cheats/${cheatId}/commands`, commandData)
    .then(res => {
      dispatch({
        type: actions.ADD_COMMAND_SUCCESS,
        payload: res.data.newCommand
      });
    }).catch(error => {
      dispatch({
        type: actions.ADD_COMMAND_FAILURE,
        payload: error.response
      });
    });
};
