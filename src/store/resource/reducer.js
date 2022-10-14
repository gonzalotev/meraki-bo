import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  home: {},
  ourSpaces: {},
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    fetchResourceRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchResourceSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state[payload.data.name] = payload.data;
    },
    fetchResourceError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    saveImageResourceRequest: (state) => {
      state.status = getStartStatus();
    },
    saveImageResourceSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    saveImageResourceError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    removeImageResourceRequest: (state) => {
      state.status = getStartStatus();
    },
    removeImageResourceSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.resource[payload.type].images = state.resource[payload.type].images.filter(image => image.id !== payload.imageId);
    },
    removeImageResourceError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  fetchResourceRequest,
  fetchResourceSuccess,
  fetchResourceError,
  saveImageResourceRequest,
  saveImageResourceSuccess,
  saveImageResourceError,
  removeImageResourceRequest,
  removeImageResourceSuccess,
  removeImageResourceError,
} = reducer.actions;

export default reducer.reducer;