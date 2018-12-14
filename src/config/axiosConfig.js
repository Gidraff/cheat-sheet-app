import axios from 'axios';

const url = 'http://localhost:8000';

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default instance;
