import axios from "axios";
import * as types from "./todo.actionTypes";

export const addTodoAPI = (todo) => (dispatch) => {
  dispatch({ type: types.ADD_TOD_LOADING });
  axios
    .post("http://localhost:8080/todos", todo)
    .then((res) => {
      dispatch({ type: types.ADD_TOD_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.ADD_TOD_FAILED });
    });
};

export const getTodosAPI = () => (dispatch) => {
  dispatch({ type: types.GET_TODO_LOADING });
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: types.GET_TODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_TODO_FAILED });
    });
};

export const updateTodoAPI = (todo) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${todo.id}`, { status: !todo.status })
    .then((res) => {
      dispatch({ type: types.UPDAT_TODO, payload: todo });
    });
};

export const removeTodoAPI = (todo) => (dispatch) => {
  axios.delete(`http://localhost:8080/todos/${todo.id}`).then((res) => {
    dispatch({ type: types.REMOVE_TODO, payload: todo });
  });
};
