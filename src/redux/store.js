import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
  localStorage.setItem('user', JSON.stringify(store.getState().auth));
});
