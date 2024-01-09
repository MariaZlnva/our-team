import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IMember, IMemberAction } from "./types";
import axios from "axios";

const initialState: IMember = {
  member: {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
};

export const getDataUser = createAsyncThunk(
  "team/getDataUser",
  async (id: string) => {
    const response = await axios.get<IMemberAction>(
      `https://reqres.in/api/users/${id}`
    );
    return response.data.data;
  }
);
export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
  
   
  },
  extraReducers: (builder) => {
    // builder.addCase(getDataUser.pending, (state) => {
    //   state.member = {};
    // });
    builder.addCase(getDataUser.fulfilled, (state, action) => {
      state.member = action.payload;
 
    });
    // builder.addCase(getDataUser.rejected, (state, action) => {
    //   console.log(action, 'rejected');
    //   state.member = {};
    // });
  },
});

export const member = (state: RootState) => state.member.member;

export default memberSlice.reducer;
