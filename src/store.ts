import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from './features/reducer';
import remoteTwoSlice from './features/remoteTwo.slice';

const store = configureStore({
  reducer: combineReducers({
    remote_one: reducer,
    remote_two: remoteTwoSlice.reducer, // inject rmote_two mock reducer
  }),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
