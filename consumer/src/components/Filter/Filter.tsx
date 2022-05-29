import styled from 'styled-components';

// Responsive
import Mobile from '../../responsive/Mobile';

const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterItem = styled.div`
  margin: 20px;

  ${Mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${Mobile({ margin: '0 0 10px' })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  ${Mobile({ margin: '5px 0' })};
`;

const Option = styled.option``;

const Filter = () => {
  return (
    <Container>
      <Title>Computers</Title>
      <FilterContainer>
        <FilterItem>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>Type</Option>
            <Option>Computer</Option>
            <Option>Phone</Option>
            <Option>Headphone</Option>
            <Option>Clock</Option>
            <Option>Watch</Option>
            <Option>Cloth</Option>
          </Select>
          <Select>
            <Option disabled selected>Availability</Option>
            <Option>Arrive</Option>
            <Option>Available</Option>
            <Option>Not Available</Option>
            <Option>Stock Out</Option>
          </Select>
        </FilterItem>
        <FilterItem>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>High Price</Option>
            <Option>Low Price</Option>
          </Select>
        </FilterItem>
      </FilterContainer>
    </Container>
  );
};

export default Filter;
