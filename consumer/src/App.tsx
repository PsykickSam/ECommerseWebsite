import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IReduxProps } from 'interface/IReduxProps';
import { connect } from 'react-redux';
import Constants from 'constants/constants';

// Pages
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Products from 'pages/Products';
import Product from 'pages/Product';
import Cart from 'pages/Cart';

// TODO: Set 'httpClient' to Redux Toolkit - TUTORIAL: https://www.bezkoder.com/redux-toolkit-example-crud/
const App = (props: IReduxProps) => {
  return (
    <Router>
      <Routes>
        <Route path={Constants.urls.web.root} element={props.state.authentication.isAuthenticated ? <Home /> : <Navigate to={Constants.urls.web.login} />} />
        <Route path={Constants.urls.web.products__category} element={props.state.authentication.isAuthenticated ? <Products /> : <Navigate to={Constants.urls.web.login} />} />
        <Route path={Constants.urls.web.product__id} element={props.state.authentication.isAuthenticated ? <Product /> : <Navigate to={Constants.urls.web.login} />} />
        <Route path={Constants.urls.web.cart} element={props.state.authentication.isAuthenticated ? <Cart /> : <Navigate to={Constants.urls.web.login} />} />
        <Route path={Constants.urls.web.register} element={props.state.authentication.isAuthenticated ? <Navigate to={Constants.urls.web.root} /> : <Register />} />
        <Route path={Constants.urls.web.login} element={props.state.authentication.isAuthenticated ? <Navigate to={Constants.urls.web.root} /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default connect((state: any) => ({ state }), {})(App);
