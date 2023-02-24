import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
addTodo:(state, action) => {
 state.todos.push(action.payload)
},
deleteTodo:(state, action) => {
  state.todos =  state.todos.filter(item => item.id !== action.payload)
},
clearCompletedTodos:(state) => {
  state.todos = []
}
}})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, clearCompletedTodos } = todoSlice.actions

export default todoSlice.reducer