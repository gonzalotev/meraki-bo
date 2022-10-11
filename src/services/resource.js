import axios from 'axios';

const ResourceService = {
  fetchResource: (typeId) => axios.get(`/public-api/resource/${typeId}`),
  saveImageResource: ({ type, values }) => {
    if (values.id) {
      return axios.put(`/api/resource/image/${values.id}`, { type, values });
    }
    return axios.post('/api/resource/image', { type, values });
  },
  removeResource: ({ imageId }) => axios.delete(`/api/resource/image/${imageId}`),
};

export default ResourceService;
