import * as actions from '../actions/types';
import  {initialState}  from '../store/initialState';


const cheatReducer = (state = initialState.cheats, action) => {
  switch (action.type) {
  case actions.CREATE_CHEAT_SUCCESS:
    return [
      ...state, Object.assign({}, action.cheat)
    ];

  case actions.CREATE_CHEAT_FAILURE:
    return {...state, error: action.payload};

  case actions.LOAD_CHEAT_SUCCESS:
    return {
      docs: action.payload.docs,
      total: action.payload.total,
      limit: action.payload.limit,
      page: action.payload.page,
      pages: action.payload.pages
    };

  case actions.LOAD_CHEAT_FAILURE:
    return action.payload;

  default:
    break;
  }
  return state;
};

export default cheatReducer;
