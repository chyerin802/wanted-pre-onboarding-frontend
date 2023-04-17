import axios from 'axios';
import { API_BASE_URL } from 'constants/api';

// 기본 요청
const defaultInstance = axios.create();
// 인증이 필요한 요청
const authInstance = axios.create();

// 1. post의 content-type, baseURL 지정
defaultInstance.defaults.headers.post['Content-Type'] = 'application/json';
defaultInstance.defaults.baseURL = API_BASE_URL;

authInstance.defaults.headers.post['Content-Type'] = 'application/json';
authInstance.defaults.baseURL = API_BASE_URL;

// 2. 인증 요청은 헤더에 토큰 포함
authInstance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 헤더에 토큰값 설정
    const AUTH_TOKEN = localStorage.getItem('access_token');
    config.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

export { defaultInstance, authInstance };
