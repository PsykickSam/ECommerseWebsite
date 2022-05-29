import styled from 'styled-components';

// Responsive
import Mobile from '../../responsive/Mobile';

// Icons
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${Mobile({ padding: '10px' })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button<{ view: string }>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.view === 'filled' && 'none '};
  color: ${props => props.view === 'filled' && 'white'};
  background-color: ${props => props.view === 'filled' ? '#212121' : 'transparent'};
`;

const TopTexts = styled.div`
  ${Mobile({ display: 'none' })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${Mobile({ flexDirection: 'column' })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${Mobile({ flexDirection: 'column' })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  ${Mobile({ flexDirection: 'column', alignItems: 'center' })};
`;

const Image = styled.img`
  width: 300px;

`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${Mobile({ alignItems: 'center' })};
`;

const ProductName = styled.span`
  ${Mobile({ margin: '5px 0' })};
`;

const ProductId = styled.span`
  ${Mobile({ margin: '5px 0 0' })};
`;

const ProductSize = styled.span`
  ${Mobile({ margin: '5px 0 0' })};
`;

const ProductColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};

  ${Mobile({ margin: '10px 0 0' })};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${Mobile({ margin: '5px 15px' })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eeeeee;
  border: none;
  height: 1px;
  margin: 25px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  display: flex;
  align-items: center;
`;

const SummaryContainer = styled.div`
  width: 100%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div<{ type: string }>`
  margin: 35px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && 500};
  font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 600;
  background-color: black;
`;

const CartView = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton view="">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Your Wishlist (1)</TopText>
          </TopTexts>
          <TopButton view="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={process.env.REACT_APP_IMAGE_SERVER + 'clock.1'} />
                <Details>
                  <ProductName><b>NAME:</b> METAL CLOCK</ProductName>
                  <ProductId><b>ID:</b> 000123123123</ProductId>
                  <ProductSize><b>SIZE:</b> MEDIUM</ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice># 30.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={process.env.REACT_APP_IMAGE_SERVER + 'watch.1'} />
                <Details>
                  <ProductName><b>NAME:</b> METAL CLOCK</ProductName>
                  <ProductId><b>ID:</b> 000123123123</ProductId>
                  <ProductSize><b>SIZE:</b> SMALL</ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice># 30.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryContainer>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem type="">
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice># 60.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="">
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice># 6.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="">
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice># -1.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice># 65.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </SummaryContainer>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartView;
