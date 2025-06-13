import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL } from '@/api/config';

// 创建 axios 实例
const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

// 封装请求方法
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return service.request(config);
};

export default request; 