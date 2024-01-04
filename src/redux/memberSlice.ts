import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IMember, IMemberAction } from './types';
import axios from 'axios';

const initialState: IMember = {
  member: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
};

export const getDataUser = createAsyncThunk('team/getDataUser', async (id: string) => {
  const response = await axios.get<IMemberAction>(`https://reqres.in/api/users/${id}`);
  console.log('ответ api DataUser =>', response.data.data);
  return response.data.data;
});
export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    // addTask: (state, action: PayloadAction<ITask>) => {
    //   state.taskList.unshift(action.payload);
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(getDataUser.pending, (state) => {
    //   state.member = {};
    // });
    builder.addCase(getDataUser.fulfilled, (state, action) => {
      console.log('в методе редюсера action =>', action.payload);
      // state.teamList.push(...action.payload);
      state.member = action.payload;
    });
    // builder.addCase(getDataUser.rejected, (state, action) => {
    //   console.log(action, 'rejected');
    //   state.teamList = [];
    // });
  },
});

// Action creators are generated for each case reducer function
// export const {

// } = teamSlice.actions;
export const member = (state: RootState) => state.member.member;

export default memberSlice.reducer;
