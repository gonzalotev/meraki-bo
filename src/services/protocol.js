import axios from 'axios';

const ProtocolService = {
  fetchProtocol: () => axios.get('/public-api/protocol'),
};

export default ProtocolService;
