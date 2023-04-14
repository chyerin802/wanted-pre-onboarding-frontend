import { authInstance } from 'api/instance';

const API_PATH_TODO = '/todos';

export const createTodo = async (body) => {
  try {
    await authInstance(API_PATH_TODO, body);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTodos = async () => {
  try {
    await authInstance(API_PATH_TODO);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
