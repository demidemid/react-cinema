import { combineReducers } from 'redux';

import cardReducer from './card/card.reducer';

export default combineReducers({
  movieCards: cardReducer
});