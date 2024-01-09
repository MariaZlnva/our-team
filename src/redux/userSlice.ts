import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from './service/auth';
import { IInput, IUserState } from './types';
import { RootState } from './store';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password }: IInput) => {
    const response = await AuthService.register({ email, password });
    return response;
  },
);

export const loginUser = createAsyncThunk('user/login', async ({ email, password }: IInput) => {
  const response = await AuthService.login({ email, password });
  return response;
});

const initialState: IUserState = {
  id: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteToken: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('id');
      state.isLoggedIn = false;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.id = '';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      localStorage.setItem('id', JSON.stringify(action.payload.id));

    });
    builder.addCase(registerUser.rejected, (state) => {
      state.id = '';
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoggedIn = false;
    });
  },
});



export const id = (state: RootState) => state.user.id;
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const { deleteToken } = userSlice.actions;

export default userSlice.reducer;
