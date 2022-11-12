import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus,
} from '../helper/statusStateFactory';

const initialState = {
  timetables: [],
  status: getStartStatus(),
  timetable: {
    idTimetable: 0,
    day: '',
    schedule: '',
    discipline: '',
  },
};

export const reducer = createSlice({
  name: 'timetable',
  initialState,
  reducers: {
    fetchTimetablesRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchTimetablesSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetables = payload.timetables;
    },
    fetchTimetablesError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    fetchTimetableRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchTimetableSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetable = payload.timetable;
    },
    fetchTimetableError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    cleanValues: (state) => ({
      ...initialState,
      timetables: state.timetables,
    }),
    cleanTimetable: (state) => {
      state.timetable = initialState.timetable;
    },
    saveTimetableRequest: (state) => {
      state.status = getStartStatus();
      state.isSaving = true;
    },
    saveTimetableSuccess: (state) => {
      state.status = getSuccessStatus();
      state.isSaving = false;
    },
    saveTimetableError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
      state.isSaving = initialState.isSaving;
    },
    removeTimetableRequest: (state) => {
      state.status = getStartStatus();
    },
    removeTimetableSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetables = state.timetables.filter(timetable => timetable.idTimetable !== payload);
    },
    removeTimetableError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
  },
});

export const {
  fetchTimetablesRequest,
  fetchTimetablesSuccess,
  fetchTimetablesError,
  fetchTimetableRequest,
  fetchTimetableSuccess,
  fetchTimetableError,
  saveTimetableRequest,
  saveTimetableSuccess,
  saveTimetableError,
  removeTimetableRequest,
  removeTimetableSuccess,
  removeTimetableError,
  cleanValues,
  cleanTimetable,
} = reducer.actions;

export default reducer.reducer;
