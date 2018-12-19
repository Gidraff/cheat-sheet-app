import * as actions from '../actions/types';
import  {initialState}  from '../store/initialState';


const cheatReducer = (state = initialState.cheats, action) => {
  switch (action.type) {
  case actions.CREATE_CHEAT_SUCCESS:
    return [
      ...state, Object.assign({}, action.payload)
    ];

  case actions.CREATE_CHEAT_FAILURE:
    return {...state, error: action.payload};

  case actions.LOAD_CHEAT_SUCCESS:
    return [ ...action.payload.docs];

  case actions.LOAD_CHEAT_FAILURE:
    return action.payload;

  case actions.SEARCH_CHEAT:
    return action.payload;

  case actions.DELETE_CHEAT_SUCCESS:
    return state.filter(
      cheat => cheat._id !== action.payload.cheatId
    );
  default:
    break;
  }
  return state;
};

export default cheatReducer;
