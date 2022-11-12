import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { push } from 'redux-first-history';
import { DisciplineService } from 'services';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import { fetchStaticDataRequest } from 'store/staticData/reducer';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* save({ payload }) {
  try {
    const disciplineService = yield call(createService, DisciplineService);
    yield call(disciplineService.saveStaticData, payload);
    yield put(actions.saveDisciplineSuccess());
    yield put(fetchStaticDataRequest());
    yield put(push('/timetable'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveDisciplineError);
  }
}

export default function* saga() {
  yield takeLatest(actions.saveDisciplineRequest, save);
}
