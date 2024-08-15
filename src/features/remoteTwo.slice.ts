import { createSlice } from '@reduxjs/toolkit'

// mock remote_two state

const initialState = {
  counter: { value: 99 }
};

// mock remote_two slice

const remoteTwoSlice = createSlice({
  name: 'remote_two_counter',
  initialState,
  reducers: {}
});

export default remoteTwoSlice;