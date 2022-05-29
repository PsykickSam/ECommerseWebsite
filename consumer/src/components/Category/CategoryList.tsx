import styled from 'styled-components';

// Component
import CategoryItem from './CategoryItem';

// Responsive
import Mobile from 'responsive/Mobile';

// Data
import CategoriesData from 'data/categories';

// Interface
import { ICategoryData } from 'interface/ICategoryData';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${Mobile({ padding: '0', flexDirection: 'column' })};
`;

const CategoryList = () => {
  return (
    <Container>
      {CategoriesData.map((item: ICategoryData) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default CategoryList;
