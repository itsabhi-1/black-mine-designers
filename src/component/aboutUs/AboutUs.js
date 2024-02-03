import React from 'react'
import banner from '../../assets/image/about/banner.jpg'
function AboutUs() {
    return (
        <section className='about_us'>
            <div className='container-fluid contact-fluid'>
                <div className='contact_Us_breadcumb'>
                    <div className='bread-main'>
                        <div className='bred-hading text-center'>
                            <h5 className='page_heading '>About Details</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about_main'>
                <div className="container">
                    <div>
                        <div className="row">
                            <h5 className='about_heading pb-5'>About Us</h5>
                            <div className="col-lg-6 col-md-12">
                                <div className='about_img'>
                                    <img src={banner} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className='about_main_det'>
                                    <p>Welcome to <b>BLACK MINE</b>, where fashion meets expression. At <b>BLACK MINE</b>, we believe that style is more than just clothing; it's a form of self-expression, a canvas to showcase your unique identity.</p>
                                    <p>Our journey began with a passion for quality craftsmanship, trendsetting designs, and a commitment to sustainability. Each piece in our collection is thoughtfully curated to blend timeless elegance with contemporary flair, ensuring that you not only look good but feel confident in what you wear.</p>
                                    <p>Thank you for being part of our journey. Explore our collection, join the <b>BLACK MINE</b> community, and let your style tell your story.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <h5 className='about_heading mt-5  pb-5'>WHY CHOOSE US</h5>
                            <div className="col-lg-3 col-md-6 col-sm-6 ">
                                <div className='about_service_card'>
                                    <div className='about_service m-auto '>
                                        <i className='zmdi zmdi-shopping-cart-plus' />
                                    </div>
                                    <div className='about_service_detail'>
                                        <h3>BEST PRODUCT</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 ">
                                <div className='about_service_card'>
                                    <div className='about_service m-auto '>
                                        <i className='zmdi zmdi-headset-mic' />
                                    </div>
                                    <div className='about_service_detail'>
                                        <h3>24/7 SUPPORT</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 ">
                                <div className='about_service_card'>
                                    <div className='about_service m-auto '>
                                        <i className='zmdi zmdi-shield-check' />
                                    </div>
                                    <div className='about_service_detail'>
                                        <h3>SECURE</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 ">
                                <div className='about_service_card'>
                                    <div className='about_service m-auto '>
                                        <i className='zmdi zmdi-trending-up' />
                                    </div>
                                    <div className='about_service_detail'>
                                        <h3>BEST PRODUCT</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
