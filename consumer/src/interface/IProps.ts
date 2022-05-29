import { ILocalSnackbarConfig } from './ILocalSnackbarConfig';

export interface ILoginProps {
  onClickLoginButton: (event: React.MouseEvent<HTMLElement>) => void;
  snackbarConfig: ILocalSnackbarConfig;
  username: string;
  password: string;
  setUsername: Function;
  setPassword: Function;
};
