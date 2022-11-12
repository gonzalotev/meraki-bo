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
    registerError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    logoutRequest: () => {},
    recoveryPasswordRequest: (state) => {
      state.recoveryStatus = getStartStatus();
    },
    recoveryPasswordSuccess: (state) => {
      state.recoveryStatus = getSuccessStatus();
    },
    recoveryPasswordError: (state, { payload }) => {
      state.recoveryStatus = getErrorStatus(payload);
    },
    resetPasswordRequest: (state) => {
      state.resetStatus = getStartStatus();
    },
    resetPasswordSuccess: (state) => {
      state.resetStatus = getSuccessStatus();
    },
    resetPasswordError: (state, { payload }) => {
      state.resetStatus = getErrorStatus(payload);
    },
    getSessionRequest: (state) => {
      state.status = getStartStatus();
    },
    getSessionSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.user = payload.user;
      state.token = payload.token;
    },
    getSessionError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
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
