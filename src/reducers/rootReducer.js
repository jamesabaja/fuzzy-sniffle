import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user_id: userReducer
});

export default rootReducer;