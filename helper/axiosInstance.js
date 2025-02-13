import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.anipixai.com/api/v1', 
  timeout: 10000,
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration or other errors
    if (error.response && error.response.status === 401) {
        // Handle 401 error here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
