import { all } from 'redux-saga/effects';
import { reducer as protocolReducers, saga as protocolSaga } from './protocol';
import { reducer as sessionReducers, saga as sessionSaga } from './session';
import { reducer as timetableReducers, saga as timetableSaga } from './timetable';
import { reducer as dutyReducers, saga as dutySaga } from './duty';

export function* rootSaga() {
  yield all([protocolSaga(), sessionSaga(), timetableSaga(), dutySaga()]);
}

export const reducers = {
  protocol: protocolReducers,
  session: sessionReducers,
  timetable: timetableReducers,
  duty: dutyReducers,
};
