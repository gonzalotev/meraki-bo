import protocolService from './protocol';

import { setupApi } from './http';

setupApi();

const api = {
  ...protocolService,
};

export default api;
