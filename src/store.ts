import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counter from './features/counter';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: combineReducers({
    counter: counter.reducer,
  }),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
