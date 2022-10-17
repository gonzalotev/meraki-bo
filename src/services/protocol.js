import axios from 'axios';

const ProtocolService = {
  fetchProtocol: () => axios.get('/public-api/protocol'),
  saveProtocol: (protocol) => axios.put('/api/protocol', protocol),
};

export default ProtocolService;
