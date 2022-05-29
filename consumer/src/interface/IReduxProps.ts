import { IAuthenticationInitialState } from './IReduxState';

export interface IReduxProps {
  state: {
    authentication: IAuthenticationInitialState
  };
  loginAction?: Function;
  updateAuthenticationAction?: Function;
}
