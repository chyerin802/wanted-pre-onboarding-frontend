import { authInstance } from 'api/instance';

const API_PATH_TODO = '/todos';

export const createTodo = async (todo) => {
  try {
    const res = await authInstance.post(API_PATH_TODO, { todo });
    return res?.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTodos = async () => {
  try {
    const res = await authInstance.get(API_PATH_TODO);
    return res?.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
