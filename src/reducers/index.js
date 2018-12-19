import { combineReducers } from 'redux';
import cheatReducer from './cheatReducer';
import commandReducer from './commandReducer';
import singleCheatSheetReducer from './singleCheatSheetReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth: auth,
  cheats: cheatReducer,
  commands: commandReducer,
  singleCheat: singleCheatSheetReducer
});

export default rootReducer;
