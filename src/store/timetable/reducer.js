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
    fetchTimetablesError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    fetchTimetableRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchTimetableSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetable = payload.timetable;
    },
    fetchTimetableError: (state, { error }) => {
      state.status = getErrorStatus(error);
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
    saveTimetableError: (state, { error }) => {
      state.status = getErrorStatus(error);
      state.isSaving = initialState.isSaving;
    },
    removeTimetableRequest: (state) => {
      state.status = getStartStatus();
    },
    removeTimetableSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetables = state.timetables.filter(timetable => timetable.idTimetable !== payload);
    },
    removeTimetableError: (state, { error }) => {
      state.status = getErrorStatus(error);
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
