import { defaultInstance } from 'api/instance';
import { API_PATH_SIGNIN, API_PATH_SIGNUP } from 'constants/api';

export const signUpAsync = async (body) => {
  try {
    await defaultInstance.post(API_PATH_SIGNUP, body);
  } catch (err) {
    // 실패 시 alert
    console.log(err);
    throw err;
  }
};

export const signInAsync = async (body) => {
  try {
    const res = await defaultInstance.post(API_PATH_SIGNIN, body);
    localStorage.setItem('access_token', res?.data?.access_token);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
