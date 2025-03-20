import {createSlice} from '@reduxjs/toolkit';
import {UserProfile} from '@types/library/librarytypes';

const initialState: UserProfile = {
  userData: {},
};

export const userProfileSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log('token toolkit', action.payload);
      state.userData = action?.payload?.data;
    },
  },
});

export const {setUserData} = userProfileSlice.actions;

export const userState = (state: any) => state.UserProfile;

export default userProfileSlice.reducer;
