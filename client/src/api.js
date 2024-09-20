import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL do seu backend
});

export const fetchServices = () => api.get('/services');
