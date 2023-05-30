import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../../api/api';
import { State } from './types/State';

const initialState: State = {
  users: [],
  user: {},
  error: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
    },
    singUp: (state, action) => {
      state.user = action.payload;
    },
    singIn: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { getUser, singUp, singIn } = authSlice.actions;

export default authSlice.reducer;
