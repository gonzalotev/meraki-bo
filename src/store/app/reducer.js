import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    downloadExcelRequest: (state) => {
      state.status = getStartStatus();
    },
    downloadExcelSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    downloadExcelError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  downloadExcelRequest,
  downloadExcelSuccess,
  downloadExcelError,
} = reducer.actions;

export default reducer.reducer;
