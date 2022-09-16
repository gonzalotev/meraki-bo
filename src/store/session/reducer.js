import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  user: {},
  status: getDefaultStatus(),
};

export const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.status = getStartStatus();
    },
    loginSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.user = payload.user;
      state.token = payload.token;
    },
    loginError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    logoutRequest: () => {},
    recoveryPasswordRequest: (state) => {
      state.status = getStartStatus();
    },
    recoveryPasswordSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.user = payload.user;
      state.recoveryToken = payload.recoveryToken;
    },
    recoveryPasswordError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    resetPasswordRequest: (state) => {
      state.status = getStartStatus();
    },
    resetPasswordSuccess: (state) => {
      state.status = getSuccessStatus();
      state.recoveryToken = undefined;
    },
    resetPasswordError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  recoveryPasswordRequest,
  recoveryPasswordSuccess,
  recoveryPasswordError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
} = slice.actions;

export default slice.reducer;
