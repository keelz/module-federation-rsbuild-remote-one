import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter';

const reducer = combineReducers({
  counter: counter.reducer,
});

export default reducer;
