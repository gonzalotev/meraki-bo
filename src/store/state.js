import { all } from 'redux-saga/effects';
import { reducer as protocolReducers, saga as protocolSaga } from './protocol';
import { reducer as sessionReducers, saga as sessionSaga } from './session';
import { reducer as timetableReducers, saga as timetableSaga } from './timetable';
import { reducer as dutyReducers, saga as dutySaga } from './duty';
import { reducer as staticDataReducers, saga as staticDataSaga } from './staticData';
import { reducer as resourceReducers, saga as resourceSaga } from './resource';
import { reducer as inscriptionReducers, saga as inscriptionSaga } from './inscription';

export function* rootSaga() {
  yield all([
    protocolSaga(),
    sessionSaga(),
    timetableSaga(),
    dutySaga(),
    staticDataSaga(),
    resourceSaga(),
    inscriptionSaga()]);
}

export const reducers = {
  protocol: protocolReducers,
  session: sessionReducers,
  timetable: timetableReducers,
  duty: dutyReducers,
  staticData: staticDataReducers,
  resource: resourceReducers,
  inscription: inscriptionReducers,
};
