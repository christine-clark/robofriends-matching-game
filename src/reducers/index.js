import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import robotsReducer from './robotsReducer';

const rootReducer = combineReducers({
  cardReducer,
  robotsReducer,
});

export default rootReducer;
