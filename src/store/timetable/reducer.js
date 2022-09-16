import { createSlice } from '@reduxjs/toolkit';
import { getStartStatus, getSuccessStatus, getErrorStatus } from '../helper/statusStateFactory';

const initialState = {
  timetable: [],
  status: getStartStatus(),
};

export const reducer = createSlice({
  name: 'timetable',
  initialState,
  reducers: {
    timetableFetchRequest: (state) => {
      state.status = getStartStatus();
    },
    timetableFetchSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.timetable = payload.timetable;
    },
    timetableFetchError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  timetableFetchRequest,
  timetableFetchSuccess,
  timetableFetchError,
} = reducer.actions;

export default reducer.reducer;
