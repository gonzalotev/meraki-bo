import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  topics: [],
  roles: [],
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'staticData',
  initialState,
  reducers: {
    fetchStaticDataRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchStaticDataSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.topics = payload.topics;
      state.roles = payload.roles;
    },
    fetchStaticDataError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    saveStaticDataRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveStaticDataSuccess: (state) => {
      state.status = getSuccessStatus();
      state.isSaving = false;
    },
    saveStaticDataError: (state, { error }) => {
      state.status = getErrorStatus(error);
      state.isSaving = initialState.isSaving;
    },
  },
});

export const {
  fetchStaticDataRequest,
  fetchStaticDataSuccess,
  fetchStaticDataError,
  saveStaticDataRequest,
  saveStaticDataSuccess,
  saveStaticDataError,
} = reducer.actions;

export default reducer.reducer;
