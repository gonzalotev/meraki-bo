import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  status: getDefaultStatus(),
  cancel: false,
};

export const reducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    cancel: (state) => {
      state.cancel = true;
    },
    downloadExcelRequest: (state) => {
      state.status = getStartStatus();
    },
    downloadExcelSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    downloadExcelError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
  },
});

export const {
  cancel,
  downloadExcelRequest,
  downloadExcelSuccess,
  downloadExcelError,
} = reducer.actions;

export default reducer.reducer;
