import config from '@/config';
import { AuthResponse } from '@/types/response/AuthResponse';
import { ENDPOINTS } from '@/utils/endpoints';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const API_URL = config.API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<AuthResponse>(
          `${API_URL}${ENDPOINTS.auth.refresh}`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

export default $api;
