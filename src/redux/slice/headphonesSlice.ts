import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IHeadphones } from '../../interface/data';
import axios from 'axios';

export const getHeadphones = createAsyncThunk('headphones/getHeadphones', async () => {
  const res = await axios.get('https://65fc001514650eb2100b4112.mockapi.io/data');
  return res.data[0];
});

const initialState: IHeadphones = {
  data: {
    headphones: [],
    wirelles: [],
  },
  status: 'loading',
};

export const headphonesSlice = createSlice({
  name: 'headphones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeadphones.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getHeadphones.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(getHeadphones.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const {} = headphonesSlice.actions;
export default headphonesSlice.reducer;
