import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { messages } from 'constant';
import {
  fetchInscriptionsRequest,
  fetchInscriptionsSuccess,
  fetchInscriptionsError,
  saveInscriptionRequest,
  saveInscriptionSuccess,
  saveInscriptionError,
  removeInscriptionRequest,
  removeInscriptionSuccess,
  removeInscriptionError,
} from './reducer';
import { handlerError } from '../app/saga';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchInscription);
    yield put(fetchInscriptionsSuccess({ inscriptions: data.inscriptions }));
  } catch (error) {
    yield call(handlerError, error, fetchInscriptionsError);
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveInscription, payload);
    yield put(saveInscriptionSuccess());
    toastNotify(`Se guardo la solicitud de: ${payload.name}`, 'success');
  } catch (error) {
    yield call(handlerError, error, saveInscriptionError);
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.removeInscription, payload);
    yield put(removeInscriptionSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, removeInscriptionError);
  }
}

export default function* saga() {
  yield takeLatest(fetchInscriptionsRequest, fetch);
  yield takeLatest(saveInscriptionRequest, save);
  yield takeLatest(removeInscriptionRequest, remove);
}
