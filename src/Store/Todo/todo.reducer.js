import * as types from "./todo.actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isErroor: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TOD_LOADING: {
      return { ...state, isLoading: true, isErroor: false };
    }

    case types.ADD_TOD_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        isLoading: false,
        isErroor: false,
      };
    }

    case types.ADD_TOD_FAILED: {
      return { ...state, isLoading: false, isErroor: true };
    }

    case types.GET_TODO_LOADING: {
      return { ...state, isLoading: true, isErroor: false };
    }

    case types.GET_TODO_SUCCESS: {
      return { ...state, todos: payload, isLoading: false, isErroor: false };
    }

    case types.GET_TODO_FAILED: {
      return { ...state, isLoading: false, isErroor: true };
    }

    case types.UPDAT_TODO: {
      let newTodo = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return { ...state, todos: newTodo };
    }

    case types.REMOVE_TODO: {
      let newTodo = state.todos.filter((todo) => todo.id !== payload.id);

      return { ...state, todos: newTodo };
    }

    default: {
      return state;
    }
  }
};
