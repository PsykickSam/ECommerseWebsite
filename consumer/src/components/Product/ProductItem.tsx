import styled from 'styled-components';

// Icon
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

// Data
import { PopularProductDataInterface } from '../../data/popular.products';

interface Props {
  item: PopularProductDataInterface
}

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const ProductItem = (props: Props) => {
  return (
    <Container>
      <Circle />
      <Image src={props.item.image} />
      <Info>
        <Icon><ShoppingCartOutlined /></Icon>
        <Icon><SearchOutlined /></Icon>
        <Icon><FavoriteBorderOutlined /></Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
