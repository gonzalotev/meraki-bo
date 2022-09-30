import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  duties: [],
  duty: {
    idDuty: 0,
    title: '',
    subtitle: '',
    price: '',
  },
  isSaving: false,
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
    findDutyRequest: (state) => {
      state.status = getStartStatus();
    },
    findDutySuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duty = payload.duty;
    },
    findDutyError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    cleanValues: (state) => {
      state.duty = initialState.duty;
    },
    saveDutyRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveDutySuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duty = payload.duty;
      state.isSaving = true;
    },
    saveDutyError: (state, { error }) => {
      state.status = getErrorStatus(error);
      state.isSaving = initialState.isSaving;
    },
  },
});

export const {
  fetchDutiesRequest,
  fetchDutiesSuccess,
  fetchDutiesError,
  findDutyRequest,
  findDutySuccess,
  findDutyError,
  cleanValues,
  saveDutyRequest,
  saveDutySuccess,
  saveDutyError,
} = reducer.actions;

export default reducer.reducer;
