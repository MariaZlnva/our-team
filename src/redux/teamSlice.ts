import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
// import type { PayloadAction } from "@reduxjs/toolkit";
import { ITeamList, ITeamListAction } from './types';
import axios from 'axios';

const initialState: ITeamList = {
  teamList: [],
};

export const getList = createAsyncThunk('team/getList', async () => {
  const response = await axios.get<ITeamListAction>(
    'https://reqres.in/api/users?page=1&per_page=12',
  );
  console.log('ответ api list=>', response.data.data);
  return response.data.data;
});

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    // addTask: (state, action: PayloadAction<ITask>) => {
    //   state.taskList.unshift(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.teamList = [];
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      console.log('в методе редюсера action =>', action);
      // state.teamList.push(...action.payload);
      state.teamList = action.payload.slice();
    });
    builder.addCase(getList.rejected, (state, action) => {
      console.log(action, 'rejected');
      state.teamList = [];
    });
  },
});

// Action creators are generated for each case reducer function
// export const {

// } = teamSlice.actions;
export const teamList = (state: RootState) => state.team.teamList;

export default teamSlice.reducer;
