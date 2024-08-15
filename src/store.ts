import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from './features/reducer';

const store = configureStore({
  reducer: {
    remote_one: reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
