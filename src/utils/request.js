import axios from 'axios';
const service = axios.create({
  baseURL: '#',
});
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;
