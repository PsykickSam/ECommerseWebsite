// Components
import Newsletter from 'components/Newsletter/Newsletter';
import Announcement from 'components/Announcement';
import CartView from 'components/Cart/CartView';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <CartView />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
