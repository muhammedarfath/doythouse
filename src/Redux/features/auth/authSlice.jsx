import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const initialState = loadState() || {
  isLoggedIn: false,
  userId: null,
  username: null,
  role: null,
  loading: false, 
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      const { uid, username, role } = action.payload; 
      state.isLoggedIn = true;
      state.userId = uid;
      state.username = username;
      state.role = role;
      state.loading = false; 
      state.error = null; 

      localStorage.setItem('authState', JSON.stringify(state));
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = 'Login failed'; 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.username = null;
      state.role = null;
      state.loading = false; 
      state.error = null; 

      localStorage.removeItem('authState');
    },
  },
});

export const { startLoading, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

