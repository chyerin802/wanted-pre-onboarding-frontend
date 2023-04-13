import axios from 'axios';
import { API_BASE_URL } from 'constants/api';

// 요청의 기본값 설정
const defaultInstance = axios.create();

// post의 content-type을 지정
defaultInstance.defaults.headers.post['Content-Type'] = 'application/json';
// 서버 API 주소 지정
defaultInstance.defaults.baseURL = API_BASE_URL;

export default defaultInstance;
