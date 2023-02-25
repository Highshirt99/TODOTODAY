import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: null,
  activeTodos: null,
  completedTodos: null,
};

export const todoSlice = createSlice({
  name: "todoItem",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({ ...action.payload, status: "active" });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.activeTodos = state.activeTodos.filter(
        (item) => item.id !== action.payload
      );
      state.completedTodos = state.completedTodos.filter(
        (item) => item.id !== action.payload
      );
    },

    changeTodoStatus: (state, action) => {
      state.todo = state.todos.filter((item) => item.id === action.payload);
      state.todos = state.todos.filter((item) => item.id !== action.payload);

      if (state.todo[0].status === "active") {
        state.todo[0].status = "completed";
      } else if (state.todo[0].status === "completed") {
        state.todo[0].status = "active";
      }

      state.todos.push(state.todo[0]);

      state.activeTodos = state.todos.filter(
        (item) => item.status === "active"
      );
      state.completedTodos = state.todos.filter(
        (item) => item.status === "completed"
      );
      console.log(state.completedTodos);
    },
    showAllTodos: (state) => {
      state.todos = state.activeTodos.concat(state.completedTodos);
    },
    showActiveTodos: (state) => {
      state.todos = state.activeTodos;
    },
    showCompletedTodos: (state) => {
      state.todos = state.completedTodos;
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((item) => item.status === "active");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  deleteTodo,
  clearCompletedTodos,
  changeTodoStatus,
  showActiveTodos,
  showCompletedTodos,
  showAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
