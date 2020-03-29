import { combineReducers } from 'redux';

import gameReducer from './game/reducer';
import leadersReducer from './leaders/reducer';

export default combineReducers({
  game: gameReducer,
  leaders: leadersReducer,
});
