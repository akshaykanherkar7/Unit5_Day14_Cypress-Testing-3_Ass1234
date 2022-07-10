import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI } from "../Store/Todo/todo.actions";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleOnAddTodo = () => {
    const payload = {
      value: todo,
      status: false,
    };
    dispatch(addTodoAPI(payload));
    setTodo("");
  };
  return (
    <div>
      <h1>AddTodo</h1>
      <input
      className="input_todo"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add_todo_btn" onClick={handleOnAddTodo}>ADD</button>
    </div>
  );
};

export default AddTodo;
