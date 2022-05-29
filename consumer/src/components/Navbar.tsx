import { connect } from 'react-redux';
import { IReduxProps } from 'interface/IReduxProps';
import AuthenticationSlice from 'redux/AuthenticationSlice';
import styled from 'styled-components';

// Icons
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

// Responsive
import Mobile from 'responsive/Mobile';
import Constants from 'constants/constants';

const Container = styled.div`
  height: 60px;

  ${Mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Mobile({ padding: '10px 0px' })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${Mobile({ width: '50px' })};
`;

const Logo = styled.h1`
  font-weight: bold;

  ${Mobile({ fontSize: '24px' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  ${Mobile({ flex: 2, justifyContent: 'center' })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${Mobile({ display: 'none' })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${Mobile({ fontSize: '12px', marginLeft: '10px' })};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LinkButton = styled.button`
  text-decoration: none;
  color: inherit;
`;

const Navbar = (props: IReduxProps) => (
  <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: 'gray', fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>BEST COMPUTERS</Logo>
      </Center>
      <Right>
        {
          props.state.authentication.isAuthenticated ?
          (<MenuItem>
              <LinkButton onClick={() => onClickLogoutButton(props)}>Log Out</LinkButton>
            </MenuItem>)
          :
          (<>
          <MenuItem>
            <Link href={Constants.urls.web.register}>Sign Up</Link>
          </MenuItem>
          <MenuItem>
            <Link href={Constants.urls.web.login}>Sign In</Link>
          </MenuItem>
          </>)
        }
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

const onClickLogoutButton = (props: IReduxProps) => {
  if (props.loginAction === undefined || props.updateAuthenticationAction === undefined) {
    return;
  }

  props.updateAuthenticationAction(false);
};

export default connect((state: any) => ({ state }), { updateAuthenticationAction: AuthenticationSlice.actions.updateAuthenticationAction })(Navbar);
