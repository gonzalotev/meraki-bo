import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import {
  fetchStaticDataRequest,
  fetchStaticDataSuccess,
  fetchStaticDataError,
} from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchStaticData);
    yield put(fetchStaticDataSuccess({ topics: data.topics, roles: data.roles }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchStaticDataError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchStaticDataRequest, fetch);
}
