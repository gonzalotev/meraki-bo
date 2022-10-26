import { call, put, takeLatest } from 'redux-saga/effects';
import Service from 'services';
import {
  fetchStaticDataRequest,
  fetchStaticDataSuccess,
  fetchStaticDataError,
} from './reducer';
import { handlerError } from '../app/saga';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchStaticData);
    yield put(fetchStaticDataSuccess({ topics: data.topics, roles: data.roles }));
  } catch (error) {
    yield call(handlerError, error, fetchStaticDataError);
  }
}

export default function* saga() {
  yield takeLatest(fetchStaticDataRequest, fetch);
}
