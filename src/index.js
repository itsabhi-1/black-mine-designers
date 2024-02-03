import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/css/TopNavbar.css'
import './assets/css/Navbar.css'
import './assets/css/Header.css'
import './assets/css/Footer.css'
import './assets/css/TShirts.css'
import './assets/css/ServiceHome.css'
import './assets/css/ContactUs.css'
import './assets/css/AboutUs.css'
import './assets/css/GridProduct.css'
import './assets/css/Product.css'
import './assets/css/ProductSlider.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
