import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosAPI,
  removeTodoAPI,
  updateTodoAPI,
} from "../Store/Todo/todo.actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  console.log("todos:", todos);

  useEffect(() => {
    dispatch(getTodosAPI());
  }, [dispatch]);

  const handleToggleStatus = (todo) => {
    dispatch(updateTodoAPI(todo));
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodoAPI(todo));
  };
  return (
    <div className="todo_list">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.value}</div>
            <div>status: {todo.status ? "Completed" : "notCompleted"}</div>
            <button onClick={() => handleToggleStatus(todo)}>Toggle</button>
            <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
