import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../../api/api';
import { State } from './types/State';

const initialState: State = {
  user: [],
  error: undefined,
};

//export const getUsers = createAsyncThunk('auth/getUsers', () => api.getUsers());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getUsers.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //   })
    //   .addCase(getUsers.rejected, (state, action) => {
    //     state.error = action.error.message;
    //   });
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
