import { legacy_createStore, applyMiddleware } from "redux";
import { todoReducer } from "./Todo/todo.reducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(todoReducer, applyMiddleware(thunk));
