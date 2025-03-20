import {createSlice} from '@reduxjs/toolkit';
import {AuthLibrary} from '@types/library/librarytypes';

const initialState: AuthLibrary = {
  token: '',
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log('token toolkit', action.payload);
      state.token = action?.payload?.token;
    },
  },
});

export const {setToken} = authSlice.actions;

export const authState = (state: any) => state.counter;

export default authSlice.reducer;
