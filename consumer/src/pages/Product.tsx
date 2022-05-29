// Components
import Announcement from 'components/Announcement';
import Navbar from 'components/Navbar';
import ProductView from 'components/Product/ProductView';
import Newsletter from 'components/Newsletter/Newsletter';
import Footer from 'components/Footer';

const Product = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <ProductView />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
