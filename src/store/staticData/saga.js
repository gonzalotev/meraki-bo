import { call, put, takeLatest } from 'redux-saga/effects';
import { StaticDataService } from 'services';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetch() {
  try {
    const sessionService = yield call(createService, StaticDataService);
    const { topics, roles } = yield call(sessionService.fetchStaticData);
    yield put(actions.fetchStaticDataSuccess({ topics, roles }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchStaticDataError);
  }
}

export default function* saga() {
  yield takeLatest(actions.fetchStaticDataRequest, fetch);
}
