import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, lastUpdated: new Date().toISOString() });
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = {
        ...action.payload,
        lastUpdated: new Date().toISOString(),
      };
    },
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),

    logTime: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      task.timeSpent.mins += Number(action.payload.mins);
      if (task.timeSpent.mins >= 60) {
        task.timeSpent.hours += 1;
        task.timeSpent.mins -= 60;
      }
      task.timeSpent.hours += Number(action.payload.hours);
    },
  },
});

export const { addTask, updateTask, deleteTask, logTime } = taskSlice.actions;
export default taskSlice.reducer;
