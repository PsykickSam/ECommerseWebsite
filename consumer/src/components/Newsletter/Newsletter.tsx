import styled from 'styled-components';

// Responsive
import Mobile from '../../responsive/Mobile';

// Icons
import Send from '@material-ui/icons/Send';

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  color: white;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${Mobile({ textAlign: 'center' })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;

  ${Mobile({ width: '80%' })};
`;

const Input = styled.input`
  flex: 8;
  border: none;
  border-radius: 0;
  padding-left: 20px;
  outline: none;
`;

const Button = styled.button `
  flex: 1;
  border: none;
  border-radius: 0;
  background-color: ghostwhite;
  color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input type="email" placeholder="Your Email"  />
        <Button >
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
