import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      state.tasks[index].title = action.payload.title;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleComplete: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      state.tasks[index].completed = !state.tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export const { addTask, deleteTask, editTask, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
