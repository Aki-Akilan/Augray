import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import userProfileSlice from './features/auth/profileSlice';
import productSlice from './features/products/productSlice';

const appReducer = combineReducers({
  auth: authSlice,
  userprofile: userProfileSlice,
  products:productSlice
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined; 
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
