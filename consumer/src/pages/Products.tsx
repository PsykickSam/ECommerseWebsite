// Components
import Announcement from 'components/Announcement';
import Navbar from 'components/Navbar';
import Filter from 'components/Filter/Filter';
import ProductList from 'components/Product/ProductList';
import Newsletter from 'components/Newsletter/Newsletter';
import Footer from 'components/Footer';

const Products = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Filter />
      <ProductList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Products;
