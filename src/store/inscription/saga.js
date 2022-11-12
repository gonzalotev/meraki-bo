import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { InscriptionService } from 'services';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetch() {
  try {
    const inscriptionService = yield call(createService, InscriptionService);
    const { inscriptions } = yield call(inscriptionService.fetchInscription);
    yield put(actions.fetchInscriptionsSuccess({ inscriptions }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchInscriptionsError);
  }
}

export function* save({ payload }) {
  try {
    const inscriptionService = yield call(createService, InscriptionService);
    yield call(inscriptionService.saveInscription, payload);
    yield put(actions.saveInscriptionSuccess());
    toastNotify(`Se guardo la solicitud de: ${payload.name}`, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveInscriptionError);
  }
}

export function* remove({ payload }) {
  try {
    const inscriptionService = yield call(createService, InscriptionService);
    yield call(inscriptionService.removeInscription, payload);
    yield put(actions.removeInscriptionSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.removeInscriptionError);
  }
}

export default function* saga() {
  yield takeLatest(actions.fetchInscriptionsRequest, fetch);
  yield takeLatest(actions.saveInscriptionRequest, save);
  yield takeLatest(actions.removeInscriptionRequest, remove);
}
