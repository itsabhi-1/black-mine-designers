import React from 'react'
import TopNavbar from '../../component/topNav/TopNavbar'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import ServiceHome from '../../component/service/ServiceHome'
import TShirts from '../../component/main/TShirts'
import Footer from '../../component/footer/Footer'

function HomePage() {
    return (
        <>
            <TopNavbar />
            <Navbar />
            <Header />
            <ServiceHome />
            <TShirts />
            <Footer />

        </>
    )
}

export default HomePage
