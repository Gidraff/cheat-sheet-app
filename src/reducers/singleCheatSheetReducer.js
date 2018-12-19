import * as actions from '../actions/types';
import  {initialState}  from '../store/initialState';

const singleCheatReducer = (state = initialState.singleCheatSheet, action) => {
  switch (action.type) {
  case actions.LOAD_SINGLE_CHEAT_SHEET_SUCCESS:
    return {
      commands: action.payload.commands,
      title: action.payload.title,
      _id: action.payload._id
    };

  case actions.LOAD_SINGLE_CHEAT_SHEET_FAILURE:
    return action.payload;

  case actions.RESET_SINGLE_CHEAT_SHEET:
    return  action.payload;

  default:
    break;
  }
  return state;
};

export default singleCheatReducer;
