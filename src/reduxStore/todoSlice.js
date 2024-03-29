import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: null,
  activeTodos: [],
  completedTodos: [],
};

export const todoSlice = createSlice({
  name: "todoItem",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const created_at = `${day}/${month}/${year}`;

      state.todos.unshift({
        ...action.payload,
        status: "active",
        created_at,
        completed_at: ""
      });

      state.activeTodos = state.todos.filter(
        (item) => item.status === "active"
      );
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
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const completed_at = `${day}/${month}/${year}`;
      state.todo = state.todos.filter((item) => item.id === action.payload);

      if (state.todo[0].status === "active") {
        state.todo[0].status = "completed";
        state.todo[0].completed_at = completed_at;
      } else if (state.todo[0].status === "completed") {
        state.todo[0].status = "active";
        state.todo[0].completed_at = "";
      }

      state.activeTodos = state.todos.filter(
        (item) => item.status === "active"
      );

      state.completedTodos = state.todos.filter(
        (item) => item.status === "completed"
      );
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
      state.completedTodos = [];
      state.todos = state.activeTodos;
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
