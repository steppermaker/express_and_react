import { combineReducers } from 'redux';

import messagesReducer from './messagesReducer';
import countReducer from './countReducer';

export default combineReducers({
  message: messagesReducer,
  count: countReducer
});