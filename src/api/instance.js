import axios from 'axios';
import { API_BASE_URL } from 'constants/api';

// 기본 요청
const defaultInstance = axios.create();
// 인증이 필요한 요청
const authInstance = axios.create();

// post의 content-type, baseURL 지정
defaultInstance.defaults.headers.post['Content-Type'] = 'application/json';
defaultInstance.defaults.baseURL = API_BASE_URL;

authInstance.defaults.headers.post['Content-Type'] = 'application/json';
authInstance.defaults.baseURL = API_BASE_URL;

// 인증 요청은 헤더에 토큰 포함
const AUTH_TOKEN = localStorage.getItem('access_token');
authInstance.defaults.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export { defaultInstance, authInstance };
