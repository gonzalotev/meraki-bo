import protocolService from './protocol';
import sessionService from './session';
import storageService from './storage';
import TimetableService from './timetable';
import DutyService from './duty';

import { setupApi } from './http';

setupApi();

const api = {
  ...protocolService,
  ...sessionService,
  ...TimetableService,
  ...DutyService,
};

export {
  storageService,
};

export default api;
