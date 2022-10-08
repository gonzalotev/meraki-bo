import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
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

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchInscription);
    yield put(fetchInscriptionsSuccess({ inscriptions: data.inscriptions }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchInscriptionsError({ error }));
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveInscription, payload);
    yield put(saveInscriptionSuccess());
    toastNotify(`Se guardo la solicitud de: ${payload.name}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveInscriptionError({ error }));
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.removeInscription, payload);
    yield put(removeInscriptionSuccess(payload));
    toastNotify('Se borro la solicitud', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(removeInscriptionError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchInscriptionsRequest, fetch);
  yield takeLatest(saveInscriptionRequest, save);
  yield takeLatest(removeInscriptionRequest, remove);
}
