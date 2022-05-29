import { createSlice } from '@reduxjs/toolkit';
import { IAuthenticationInitialState } from 'interface/IReduxState';
import EnumReduxStateStatus from 'enumeration/ReduxStateStatus';
import authenticationActions from 'redux/actions/authentication';
import authenticationReducers from 'redux/reducers/authentication';

const initialState: IAuthenticationInitialState = {
  loading: false,
  status: EnumReduxStateStatus.IDLE,
  isError: false,
  message: '',
  data: null,
  isAuthenticated: false
};

const AuthenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: { // Non-Async
    updateAuthenticationAction: authenticationReducers.updateAuthenticationReducer
  },
  extraReducers: (builder) => { // Async
    // Login
    builder.addCase(authenticationActions.loginAction.pending, authenticationReducers.loginPendingReducer);
    builder.addCase(authenticationActions.loginAction.rejected, authenticationReducers.loginRejectedReducer);
    builder.addCase(authenticationActions.loginAction.fulfilled, authenticationReducers.loginFulfilledReducer);
    // Register
  }
});

const { reducer } = AuthenticationSlice;
const actions = { ...authenticationActions, ...AuthenticationSlice.actions };

export default { reducer, actions };
