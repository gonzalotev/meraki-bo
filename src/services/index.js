import protocolService from './protocol';
import sessionService from './session';
import storageService from './storage';
import TimetableService from './timetable';
import DutyService from './duty';
import StaticDataService from './staticData';

import { setupApi } from './http';

setupApi();

const api = {
  ...protocolService,
  ...sessionService,
  ...TimetableService,
  ...DutyService,
  ...StaticDataService,
};

export {
  storageService,
};

export default api;
