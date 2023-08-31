import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  _isAuth: boolean;
}

const initialState: AuthState = {
  _isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state._isAuth = false;
    },
    login: (state) => {
      state._isAuth = true;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
