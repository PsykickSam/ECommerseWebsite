import httpClient from 'http/http-client';
import Constants from 'constants/constants';
import ExceptionHandler from 'handler/exception-handler';
import { ILoginRequest, IRegisterRequest } from 'interface/IAuthentication';
import { IExceptionHandling } from 'interface/IExceptionHandling';

class AuthenticationService {
  async login(request: ILoginRequest): Promise<IExceptionHandling> {
    return await ExceptionHandler.async(
      async () =>
        await httpClient.post(Constants.urls.api.login, {
          username: request.username,
          password: request.password,
        } as ILoginRequest)
    );
  }

  async register(request: IRegisterRequest): Promise<IExceptionHandling> {
    return await ExceptionHandler.async(
      async () =>
        await httpClient.post(Constants.urls.api.register, {
          username: request.username,
          password: request.password,
          email: request.email,
        } as IRegisterRequest)
    );
  }
}

export default AuthenticationService;
