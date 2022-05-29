import { configureStore } from '@reduxjs/toolkit';
import AuthenticationSlice from 'redux/AuthenticationSlice';

const reducers = {
  authentication: AuthenticationSlice.reducer
};

const store = configureStore({
  reducer: reducers,
  devTools: true
});

export default store;
