import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  duties: [],
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'duty',
  initialState,
  reducers: {
    fetchDutiesRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchDutiesSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duties = payload.duties;
    },
    fetchDutiesError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  fetchDutiesRequest,
  fetchDutiesSuccess,
  fetchDutiesError,
} = reducer.actions;

export default reducer.reducer;
