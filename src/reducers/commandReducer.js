import * as actions from '../actions/types';
import  {initialState}  from '../store/initialState';


const commandReducer = (state = initialState.commands, action) => {
  switch (action.type) {

  case actions.ADD_COMMAND_SUCCESS:
    return [
      ...state, Object.assign({}, action.payload)
    ];

  case actions.ADD_COMMAND_FAILURE:
    return {...state, errors: action.payload};

  case actions.LOAD_COMMANDS_SUCCESS:
    return [ ...action.payload.docs];

  case actions.LOAD_COMMANDS_FAILURE:
    return action.payload;

  case actions.DELETE_COMMAND_SUCCESS:
    return state.filter(
      command => command._id !== action.payload.commandId
    );

  default:
    break;
  }
  return state;
};

export default commandReducer;
