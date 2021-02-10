import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import namesReducer from '../features/names/namesSlice';
import todoReducer from '../features/todo/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    names: namesReducer,
    todo: todoReducer,
  },
});
