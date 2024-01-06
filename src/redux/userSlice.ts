import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from './service/auth';
import { IInput, IUserState } from './types';
// import { RootState } from './store';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password }: IInput) => {
    const response = await AuthService.register({ email, password });
    console.log(response); //{"id":4,"token":"QpwL5tke4Pnpja7X4"}
    return response;
  },
);

export const loginUser = createAsyncThunk('user/register', async ({ email, password }: IInput) => {
  const response = await AuthService.login({ email, password });
  console.log(response);
  return response;
});

const initialState: IUserState = {
  id: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

// export const user = (state: RootState) => state.user;
export default userSlice.reducer;
