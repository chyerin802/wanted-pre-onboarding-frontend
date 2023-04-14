import { authInstance } from 'api/instance';

const API_PATH_TODO = '/todos';

export const createTodo = async (todo) => {
  try {
    await authInstance.post(API_PATH_TODO, { todo });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTodos = async () => {
  try {
    await authInstance.get(API_PATH_TODO);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
