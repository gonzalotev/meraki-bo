import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  enrollment: {},
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
      state.enrollment = payload.enrollment;
    },
    fetchDutiesError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    fetchDutyRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchDutySuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duty = payload.duty;
    },
    fetchDutyError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    cleanValues: (state) => ({
      ...initialState,
      duties: state.duties,
    }),
    cleanDuty: (state) => {
      state.duty = initialState.duty;
    },
    saveDutyRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveDutySuccess: (state) => {
      state.status = getSuccessStatus();
      state.isSaving = false;
    },
    saveDutyError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
      state.isSaving = initialState.isSaving;
    },
    saveEnrollmentRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveEnrollmentSuccess: (state) => {
      state.status = getSuccessStatus();
      state.isSaving = false;
    },
    saveEnrollmentError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
      state.isSaving = initialState.isSaving;
    },
    removeDutyRequest: (state) => {
      state.status = getStartStatus();
    },
    removeDutySuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duties = state.duties.filter(duty => duty.idDuty !== payload);
    },
    removeDutyError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
  },
});

export const {
  fetchDutiesRequest,
  fetchDutiesSuccess,
  fetchDutiesError,
  fetchDutyRequest,
  fetchDutySuccess,
  fetchDutyError,
  saveDutyRequest,
  saveDutySuccess,
  saveDutyError,
  saveEnrollmentRequest,
  saveEnrollmentSuccess,
  saveEnrollmentError,
  removeDutyRequest,
  removeDutySuccess,
  removeDutyError,
  cleanValues,
  cleanDuty,
} = reducer.actions;

export default reducer.reducer;
