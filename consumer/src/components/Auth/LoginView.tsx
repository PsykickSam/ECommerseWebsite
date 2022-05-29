import React from 'react';
import styled from 'styled-components';
import Constants from 'constants/constants';
import { ILoginProps as ILoginViewProps } from 'interface/IProps';

// Responsive
import Mobile from 'responsive/Mobile';
import LocalSnackbar from 'components/LocalSnackbar';

const Container = styled.div<{ image_url: string }>`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(2, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),
    url(${(props) => props.image_url}) center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${Mobile({ width: '80%' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0 0 10px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  margin: 0 0 10px;
  padding: 15px 20px;
  background-color: #212121;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const LoginView = (props: ILoginViewProps) => {
  return (
    <Container image_url={process.env.REACT_APP_IMAGE_SERVER_HD + 'books.2'}>
      <Wrapper>
        <Title>SIGN IN TO ACCOUNT</Title>
        <Form>
          <Input type="text" placeholder="Username" onChange={(e) => props.setUsername(e.target.value)} value={props.username} />
          <Input type="password" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)} value={props.password} />
          <Button onClick={props.onClickLoginButton}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href={Constants.urls.web.register}>CREATE A NEW ACCOUNT</Link>
        </Form>

        <LocalSnackbar isOpen={props.snackbarConfig.isOpen} message={props.snackbarConfig.message} />
      </Wrapper>
    </Container>
  );
};

export default LoginView;
