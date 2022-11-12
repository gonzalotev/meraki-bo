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
    fetchResourceError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    saveImageResourceRequest: (state) => {
      state.status = getStartStatus();
    },
    saveImageResourceSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    saveImageResourceError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    removeImageResourceRequest: (state) => {
      state.status = getStartStatus();
    },
    removeImageResourceSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state[payload.type] = {
        ...state[payload.type],
        images: state[payload.type].images.filter(image => image.id !== payload.imageId),
      };
    },
    removeImageResourceError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
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
