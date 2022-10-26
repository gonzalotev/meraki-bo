import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  user: {},
  recoveryStatus: getDefaultStatus(),
  resetStatus: getDefaultStatus(),
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
    loginError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    registerRequest: (state) => {
      state.status = getStartStatus();
    },
    registerSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    registerError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    logoutRequest: () => {},
    recoveryPasswordRequest: (state) => {
      state.recoveryStatus = getStartStatus();
    },
    recoveryPasswordSuccess: (state) => {
      state.recoveryStatus = getSuccessStatus();
    },
    recoveryPasswordError: (state, { error }) => {
      state.recoveryStatus = getErrorStatus(error);
    },
    resetPasswordRequest: (state) => {
      state.resetStatus = getStartStatus();
    },
    resetPasswordSuccess: (state) => {
      state.resetStatus = getSuccessStatus();
    },
    resetPasswordError: (state, { error }) => {
      state.resetStatus = getErrorStatus(error);
    },
    getSessionRequest: (state) => {
      state.status = getStartStatus();
    },
    getSessionSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.user = payload.user;
      state.token = payload.token;
    },
    getSessionError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
  getSessionRequest,
  getSessionSuccess,
  getSessionError,
  logoutRequest,
  recoveryPasswordRequest,
  recoveryPasswordSuccess,
  recoveryPasswordError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
} = slice.actions;

export default slice.reducer;
