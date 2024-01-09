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
  return response.data.data;
});

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      state.teamList.map((item) => {
        if (item.id === action.payload) {
          item.isLiked = !item.isLiked;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.teamList = [];
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      action.payload.map((item) => {
        item.isLiked = false;
      })
      state.teamList = action.payload.slice();
    });
    builder.addCase(getList.rejected, (state, action) => {
      console.log(action, 'rejected');
      state.teamList = [];
    });
  },
});

export const teamList = (state: RootState) => state.team.teamList;
export const { toggleLike } = teamSlice.actions;

export default teamSlice.reducer;
