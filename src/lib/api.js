import axios from 'axios';

const apiKey = import.meta.env.VITE_STRAPI_API_KEY

// Create an Axios instance
export const axiosApi = axios.create({
    // baseURL: 'https://airesumebuilderbe-production.up.railway.app',
    baseURL: 'http://localhost:1337',
    headers: { 'Content-Type': 'application/json' },
});
const api = axios.create({
    // baseURL: 'https://airesumebuilderbe-production.up.railway.app',
    baseURL: 'http://localhost:1337',
    headers: { 'Content-Type': 'application/json' },
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

// Request interceptor
api.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default api;