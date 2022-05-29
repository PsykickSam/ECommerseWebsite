import styled from 'styled-components';

// Responsive
import Mobile from '../../responsive/Mobile';

// Icons
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${Mobile({ padding: '10px', flexDirection: 'column' })};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 90vh;

  ${Mobile({ alignSelf: 'center', justifySelf: 'center' })};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${Mobile({ width: '40vh' })};
`;

const InfoContainer = styled.div`
  height: 90vh;
  flex: 2;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Mobile({ padding: '10px' })};
`;

const TopInfoContainer = styled.div``;

const BottomInfoContainer = styled.div``;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  justify-self: start;
  display: flex;
  margin: 30px 0;

  ${Mobile({ alignItems: 'center', flexDirection: 'column' })};
`;

const FilterItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Mobile({ margin: '5px 0' })};
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;

  ${Mobile({ alignSelf: 'center' })};
`;

const FilterColorList = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.1px solid gray;
  background-color: ${props => props.color};
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  margin-top: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  ${Mobile({ marginTop: '10px', width: '100%', alignItems: 'center', justifyContent: 'center' })};
`;

const AmountContainer = styled.div `
  display: flex;
  align-items: center;
  font-weight: 700;
  align-self: center;
  margin-bottom: 10px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const ProductView = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={process.env.REACT_APP_IMAGE_SERVER + 'headphone.2'} />
        </ImageContainer>
        <InfoContainer>
          <TopInfoContainer>
            <Title>Headphone</Title>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolore commodi minima
              natus laborum accusantium laudantium eveniet ullam dolores expedita veritatis impedit
              voluptatum recusandae voluptatem sint ducimus tenetur, aliquam labore!
            </Description>
            <Price># 20.00</Price>
            <FilterContainer>
              {/* Color Filter */}
              <FilterItem>
                <FilterTitle>Color</FilterTitle>
                <FilterColorList>
                  <FilterColor color="black" />
                  <FilterColor color="ghostwhite" />
                  <FilterColor color="darkblue" />
                </FilterColorList>
              </FilterItem>
              {/* Option Filter */}
              <FilterItem>
                <FilterTitle>Warranty</FilterTitle>
                <FilterSelect>
                  <FilterOption>None</FilterOption>
                  <FilterOption>1 Year</FilterOption>
                  <FilterOption>2 Years</FilterOption>
                </FilterSelect>
              </FilterItem>
              {/* TODO: Checkbox Filter */}
              <FilterItem>
                <FilterTitle>Color</FilterTitle>
                <FilterColorList>
                  <FilterColor color="black" />
                  <FilterColor color="ghostwhite" />
                  <FilterColor color="darkblue" />
                </FilterColorList>
              </FilterItem>
              {/* TODO: Radio Filter */}
              <FilterItem>
                <FilterTitle>Color</FilterTitle>
                <FilterColorList>
                  <FilterColor color="black" />
                  <FilterColor color="ghostwhite" />
                  <FilterColor color="darkblue" />
                </FilterColorList>
              </FilterItem>
            </FilterContainer>
          </TopInfoContainer>
          <BottomInfoContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </BottomInfoContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductView;
