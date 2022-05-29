import { configureStore } from '@reduxjs/toolkit';
import AuthenticationSlice from 'redux/AuthenticationSlice';

const reducer = {
  authenticationSlice: AuthenticationSlice.reducer
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
