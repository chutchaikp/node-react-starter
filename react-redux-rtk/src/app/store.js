import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import namesReducer from '../features/names/namesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    names: namesReducer,
  },
});
