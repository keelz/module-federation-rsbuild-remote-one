import { createSlice } from '@reduxjs/toolkit';
import type {
  CaseReducer,
  CaseReducerWithPrepare,
  PayloadAction,
  Slice
} from '@reduxjs/toolkit';

export interface CounterState {
  value: number
};

declare type CounterReducer = Record<string, CaseReducer<CounterState, { payload?: any; type: string; }> | CaseReducerWithPrepare<CounterState, PayloadAction<any, string, any, any>>>

const initialState: CounterState = {
  value: 0,
};

const counter: Slice<CounterState, CounterReducer> = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
});

export const { increment, decrement, incrementByAmount } = counter.actions;

export default counter;
