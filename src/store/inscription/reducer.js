import { createSlice } from '@reduxjs/toolkit';
import {
  getStartStatus, getSuccessStatus, getErrorStatus, getDefaultStatus,
} from '../helper/statusStateFactory';

const initialState = {
  inscriptions: [],
  inscription: {
    idInsciption: 0,
    documentId: 0,
    name: '',
    surname: '',
    discipline: '',
    phone: '',
    email: '',
  },
  status: getDefaultStatus(),
};

export const reducer = createSlice({
  name: 'inscription',
  initialState,
  reducers: {
    fetchInscriptionsRequest: (state) => {
      state.status = getStartStatus();
    },
    fetchInscriptionsSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.inscriptions = payload.inscriptions;
    },
    fetchInscriptionsError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
    cleanInscription: (state) => {
      state.inscription = initialState.inscription;
    },
    saveInscriptionRequest: (state) => {
      state.status = getStartStatus();
    },
    saveInscriptionSuccess: (state) => {
      state.status = getSuccessStatus();
    },
    saveInscriptionError: (state, { payload }) => {
      state.status = getErrorStatus(payload);
    },
    removeInscriptionRequest: (state) => {
      state.status = getStartStatus();
    },
    removeInscriptionSuccess: (state, { payload }) => {
      state.status = getSuccessStatus();
      state.inscriptions = state.inscriptions.filter(inscription => inscription.idInsciption !== payload);
    },
    removeInscriptionError: (state, { error }) => {
      state.status = getErrorStatus(error);
    },
  },
});

export const {
  fetchInscriptionsRequest,
  fetchInscriptionsSuccess,
  fetchInscriptionsError,
  saveInscriptionRequest,
  saveInscriptionSuccess,
  saveInscriptionError,
  removeInscriptionRequest,
  removeInscriptionSuccess,
  removeInscriptionError,
  cleanInscription,
} = reducer.actions;

export default reducer.reducer;
