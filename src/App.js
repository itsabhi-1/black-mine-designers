// import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import ProductPage from './pages/product/ProductPage';
import GridProductPage from './pages/product/GridProductPage';
import Product from './component/product/Product';
// import Gallery from './pages/gallery/Gallery';

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contactus' element={<ContactPage />} />
            <Route path='/aboutus' element={<AboutPage />} />
            <Route path='/product/:id' component={Product} element={<ProductPage />}/>
            <Route path='/gridproduct' element={<GridProductPage />} />
            {/* <Route path='/gallery' element={<Gallery />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
