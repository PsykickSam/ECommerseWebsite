import { connect } from 'react-redux';

// Components
import Announcement from 'components/Announcement';
import Navbar from 'components/Navbar';
import Slider from 'components/Slider';

import CategoryList from 'components/Category/CategoryList';
import ProductList from 'components/Product/ProductList';
import Newsletter from 'components/Newsletter/Newsletter';
import Footer from 'components/Footer';

const Home = () => (
  <>
    <Announcement />
    <Navbar />
    <Slider />
    <CategoryList />
    <ProductList />
    <Newsletter />
    <Footer />
  </>
);

export default connect((state: any) => ({ state }), {})(Home);
