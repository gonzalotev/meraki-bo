import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'discipline',
  initialState,
  reducers: {
    saveDisciplineRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveDisciplineSuccess: (state) => {
      state.status = getSuccessStatus();
      state.isSaving = false;
    },
    saveDisciplineError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
      state.isSaving = initialState.isSaving;
    },
  },
});

export const {
  saveDisciplineRequest,
  saveDisciplineSuccess,
  saveDisciplineError,
} = reducer.actions;

export default reducer.reducer;
