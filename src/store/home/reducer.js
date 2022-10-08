import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  homes: [],
  home: {
    idHome: '',
    name: '',
    image: '',
    who: '',
  },
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchHomesRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchHomesSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.homes = payload.homes;
    },
    fetchHomesError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    fetchHomeRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchHomeSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.home = payload.home;
    },
    fetchHomeError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    cleanHome: (state) => {
      state.home = initialState.home;
    },
    saveHomeRequest: (state) => {
      state.status = getStartStatus();
    },
    saveHomeSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    saveHomeError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    removeHomeRequest: (state) => {
      state.status = getStartStatus();
    },
    removeHomeSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.homes = state.homes.filter(home => home.idHome !== payload);
    },
    removeHomeError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  fetchHomesRequest,
  fetchHomesSuccess,
  fetchHomesError,
  fetchHomeRequest,
  fetchHomeSuccess,
  fetchHomeError,
  saveHomeRequest,
  saveHomeSuccess,
  saveHomeError,
  removeHomeRequest,
  removeHomeSuccess,
  removeHomeError,
  cleanHome,
} = reducer.actions;

export default reducer.reducer;
