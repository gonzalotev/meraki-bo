import { createSlice } from '@reduxjs/toolkit';
import { getStartStatus, getSuccessStatus, getErrorStatus } from '../helper/statusStateFactory';

const initialState = {
  duty: [],
  status: getStartStatus(),
};

export const reducer = createSlice({
  name: 'duty',
  initialState,
  reducers: {
    dutyFetchRequest: (state) => {
      state.status = getStartStatus();
    },
    dutyFetchSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.duty = payload.duty;
    },
    dutyFetchError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  dutyFetchRequest,
  dutyFetchSuccess,
  dutyFetchError,
} = reducer.actions;

export default reducer.reducer;
