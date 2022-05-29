import { useState } from 'react';
import AuthenticationSlice from 'redux/AuthenticationSlice';

// Components
import LoginView from 'components/Auth/LoginView';
import { connect } from 'react-redux';
import { IExceptionHandling } from 'interface/IExceptionHandling';
import { ILoginResponse } from 'interface/IAuthentication';
import { IReduxProps } from 'interface/IReduxProps';
import { ILocalSnackbarConfig } from 'interface/ILocalSnackbarConfig';
import EnumStatusIResponse from 'enumeration/StatusIResponse';

const Login = (props: IReduxProps) => {
  const [snackbarConfig, setSnackbarConfig] = useState({ isOpen: false, message: '' } as ILocalSnackbarConfig);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123123');

  return (
    <>
      <LoginView
        onClickLoginButton={onClickLoginButton(props, username, password, setSnackbarConfig)}
        snackbarConfig={snackbarConfig}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        />
    </>
  );
};

const onClickLoginButton = (props: IReduxProps, username: string, password: string, setSnackbarConfig: Function) => async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
  event.preventDefault();

  if (props.loginAction === undefined || props.updateAuthenticationAction === undefined) {
    setSnackbarConfig({ isOpen: true, message: 'Internal Error! Please contact to the developer' } as ILocalSnackbarConfig);
    return;
  }

  const receive: IExceptionHandling = await props.loginAction({ username, password }).unwrap();
  const data: ILoginResponse | null = receive.processedData;

  if (receive.isError) {
    setSnackbarConfig({ isOpen: true, message: receive.message } as ILocalSnackbarConfig);
    return;
  }  

  if (data != null) {
    setSnackbarConfig({ isOpen: true, message: data.message } as ILocalSnackbarConfig);

    if (!data.isError && data.status === EnumStatusIResponse.SUCCESS) {
      props.updateAuthenticationAction(true);
    }
  }
};

export default connect((state: any) => ({ state }), { loginAction: AuthenticationSlice.actions.loginAction, updateAuthenticationAction: AuthenticationSlice.actions.updateAuthenticationAction })(Login);
