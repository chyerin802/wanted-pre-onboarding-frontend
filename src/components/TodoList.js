import Todo from './Todo';

const dummyTodoList = [
  {
    id: 1,
    todo: '과제하기',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: '과제하기2',
    isCompleted: true,
    userId: 1,
  },
];

const TodoList = () => {
  return (
    <ul>
      {dummyTodoList.map((el) => {
        return <Todo key={el.id} todo={el} />;
      })}
    </ul>
  );
};

export default TodoList;
