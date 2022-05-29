import EnumReduxStateStatus from 'enumeration/ReduxStateStatus';
import { IExceptionHandling } from './IExceptionHandling';

export interface IAuthenticationInitialState {
  loading: boolean;
  status: EnumReduxStateStatus;
  isError: boolean;
  message: string;
  isAuthenticated: boolean;
  data: IExceptionHandling | null;
}
