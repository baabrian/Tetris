import { combineReducers } from 'redux';
import { tetrisReducer } from './tetrisReducer';

export default combineReducers({
  tetris: tetrisReducer,
});
