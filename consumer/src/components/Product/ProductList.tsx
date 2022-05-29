import styled from 'styled-components';

// Components
import ProductItem from './ProductItem';

// Data
import PopularProductsData from '../../data/popular.products';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = () => {
  return (
    <Container>
      {PopularProductsData && PopularProductsData.map((product) => (
        <ProductItem item={product} key={product.id}></ProductItem>
      ))}
    </Container>
  );
};

export default ProductList;
