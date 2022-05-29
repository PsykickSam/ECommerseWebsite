import styled from 'styled-components';

// Responsive
import Mobile from '../responsive/Mobile';

// Icons
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Pinterest from '@material-ui/icons/Pinterest';
import Twitter from '@material-ui/icons/Twitter';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Room from '@material-ui/icons/Room';

const Container = styled.div`
  display: flex;

  ${Mobile({ flexDirection: 'column' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div<{ bgColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${Mobile({ display: 'none' })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${Mobile({ backgroundColor: '#fefefe' })};
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      {/* LEFT */}
      <Left>
        <Logo>HAMA.</Logo>
        <Description>
          There area many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon bgColor="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgColor="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bgColor="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bgColor="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* CENTER */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Personal Computers</ListItem>
          <ListItem>Watches</ListItem>
          <ListItem>Cloths</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      {/* RIGHT */}
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: 10 }} /> 12/22 Some Road, Some Street, Some City
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: 10 }} /> +00-111-222-999
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: 10 }} /> contact@email.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
