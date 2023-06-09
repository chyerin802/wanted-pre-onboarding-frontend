import { authInstance } from 'api/instance';
import { API_PATH_TODO } from 'constants/api';

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

export const updateTodo = async (id, newTodo) => {
  try {
    const res = await authInstance.put(`${API_PATH_TODO}/${id}`, newTodo);
    return res?.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteTodo = async (id) => {
  try {
    await authInstance.delete(`${API_PATH_TODO}/${id}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
