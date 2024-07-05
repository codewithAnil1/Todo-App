import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../Features/Todo/TodoSlice"
import themeReducer from '../Features/Theme/themeSlice';

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    theme:themeReducer,
  }
});


