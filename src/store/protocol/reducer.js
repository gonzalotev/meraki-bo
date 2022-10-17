import { createSlice } from '@reduxjs/toolkit';
import { getStartStatus, getSuccessStatus, getErrorStatus } from '../helper/statusStateFactory';

const initialState = {
  protocol: {},
  status: getStartStatus(),
};

export const reducer = createSlice({
  name: 'protocol',
  initialState,
  reducers: {
    protocolFetchRequest: (state) => {
      state.status = getStartStatus();
    },
    protocolFetchSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.protocol = payload.protocol;
    },
    protocolFetchError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    protocolSaveRequest: (state) => {
      state.status = getStartStatus();
    },
    protocolSaveSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    protocolSaveError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  protocolFetchRequest,
  protocolFetchSuccess,
  protocolFetchError,
  protocolSaveRequest,
  protocolSaveSuccess,
  protocolSaveError,
} = reducer.actions;

export default reducer.reducer;
