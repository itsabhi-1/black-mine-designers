import React from 'react'
import TopNavbar from '../../component/topNav/TopNavbar';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import ResponsiveGrid from '../../component/responsiveGrid/ResponsiveGrid';

function Gallery() {
  return (
    <>
        <TopNavbar/>
        <Navbar/>
        <ResponsiveGrid/>
        <Footer/>
    </>
  )
}

export default Gallery;
