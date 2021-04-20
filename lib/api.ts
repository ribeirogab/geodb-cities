import axios from 'axios';

const api = axios.create({
  baseURL: 'http://geodb-free-service.wirefreethought.com/v1/geo',
});

export { api };
