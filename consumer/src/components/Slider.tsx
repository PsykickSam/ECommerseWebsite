import { useState } from 'react';

import styled from 'styled-components';

// Icons
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';

// Responsive
import Mobile from '../responsive/Mobile';

// Data
import SliderItemsData, { SliderItemDataInterface } from '../data/slider.items';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${Mobile({ display: 'none' })};
`;

const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div<{ sliderIndex: number }>`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
  z-index: -1;
`;

const Slide = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image  = styled.img`
  height: 70%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: black;
  background-color: white;
  cursor: pointer;
`;

// State
interface InitialStateInitializer {
  sliderIndex: number,
}

const initialState: InitialStateInitializer = {
  sliderIndex: 0,
};

// Enum
enum ArrowDirection {
  LEFT, RIGHT
}

// Event
const handleClick = (state: InitialStateInitializer, setState: Function, direction: ArrowDirection) => {
  switch (direction) {
    case ArrowDirection.LEFT:
      setState({ sliderIndex: state.sliderIndex > 0 ? state.sliderIndex - 1 : SliderItemsData.length - 1 });
      break;
    case ArrowDirection.RIGHT:
      setState({ sliderIndex: state.sliderIndex < 2 ? state.sliderIndex + 1 : 0 });
      break;
  }
};

const Slider = () => {
  const [state, setState] = useState(initialState);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick(state, setState, ArrowDirection.LEFT)}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex={state.sliderIndex}>
        {
          SliderItemsData.map((item: SliderItemDataInterface) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOW ME</Button>
              </InfoContainer>
            </Slide>
          ))
        }
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick(state, setState, ArrowDirection.RIGHT)}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
