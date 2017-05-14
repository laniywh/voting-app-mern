/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
// import posts from './modules/Post/PostReducer';
import pollsReducer from './modules/Poll/PollsReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  polls: pollsReducer,
  intl,
});
