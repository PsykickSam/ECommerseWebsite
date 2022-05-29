import Constants from 'constants/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequest, IRegisterRequest } from 'interface/IAuthentication';
import AuthenticationService from 'service/AuthenticationService';

const authenticationService: AuthenticationService = new AuthenticationService();

const loginAction = createAsyncThunk(Constants.redux.thunk.auth.login, async (request: ILoginRequest) => {
  return await authenticationService.login(request);
});

const registerAction = createAsyncThunk(Constants.redux.thunk.auth.register, async (request: IRegisterRequest) => {
  // const response: IRegisterResponse = await authenticationService.login(request);
  // console.log(response);

  return null;
});

const authenticationActions = { loginAction, registerAction };
export default authenticationActions;
