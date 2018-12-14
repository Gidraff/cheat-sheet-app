import { combineReducers } from 'redux';
import cheatReducer from './cheatReducer';
import singleCheatSheetReducer from './singleCheatSheetReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth: auth,
  cheats: cheatReducer,
  singleCheat: singleCheatSheetReducer
});

export default rootReducer;
