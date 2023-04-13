import defaultInstance from './instance';

const API_PATH_SIGNUP = '/auth/signup';

export const signUpAsync = async (body) => {
  try {
    await defaultInstance.post(API_PATH_SIGNUP, body);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
