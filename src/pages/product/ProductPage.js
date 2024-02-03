import React from 'react'
import TopNavbar from '../../component/topNav/TopNavbar'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import Product from '../../component/product/Product'
import Products from '../../component/gridProduct/GridProduct';

function ProductPage() {
    return (
        <>
            <TopNavbar />
            <Navbar />
            <Product data={Products}/>
            <Footer />
        </>
    )
}

export default ProductPage
