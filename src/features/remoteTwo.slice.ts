// RemoteTwo mock slice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: { value: 99 }
};

const remoteTwoSlice = createSlice({
  name: 'remote_two_counter',
  initialState,
  reducers: {}
});

export default remoteTwoSlice;
