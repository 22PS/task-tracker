import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: JSON.parse(localStorage.getItem('user')) || {
    isAuthenticated: false,
    user: null,
    error: null,
  },

  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === '' || password === '') {
        state.error = 'Empty Field(s) !!';
      } else if (username === 'test' && password === 'test1234') {
        state.isAuthenticated = true;
        state.user = { username, password };
        state.error = null;
      } else {
        state.error = 'Invalid credentials !!';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
