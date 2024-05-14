import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[
    {
      id:1,
      text: "Dummy Todo",
      completed: false,
    },
    {
      id:2,
      text: "Dummy Todo",
      completed: true,
    },{
      id:3,
      text: "Dummy Todo",
      completed: false,
    },{
      id:4,
      text: "Dummy Todo",
      completed: true,
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState, 
  reducers:{
    addTodo: (state, action) => {
      const todo = {
        id : nanoid(),
        text : action.payload,
        completed : false,
      }
      state.todos.push(todo);
      console.log(state, action);
    },
    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => (todo.id !== action.payload));
    },
     
    toggleState: (state, action) => {
      state.todos = state.todos.map((todo) =>
        action.payload === todo.id ? ({ ...todo, completed: !todo.completed }) : todo
      );
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.id === action.payload.id ? action.payload.text = todo.text : todo; 
      })
    },
  }
})

export const {addTodo, removeTodo ,updateTodo, toggleState} = todoSlice.actions

export default todoSlice.reducer
