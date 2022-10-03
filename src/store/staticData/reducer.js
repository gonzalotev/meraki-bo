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
  },
});

export const {
  fetchStaticDataRequest,
  fetchStaticDataSuccess,
  fetchStaticDataError,
} = reducer.actions;

export default reducer.reducer;
