import React from 'react'
import icon01 from '../../assets/image/serviceIcon/icon01.png'
import icon02 from '../../assets/image/serviceIcon/icon02.png'
import icon03 from '../../assets/image/serviceIcon/icon03.png'
import icon04 from '../../assets/image/serviceIcon/icon04.png'
function ServiceHome() {
    return (
        <section className='cl_service'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3  col-md-6 col-sm-6'>
                        <div className='service_card'>
                            <div className='service_card_icon'>
                                <img src={icon01}/>
                            </div>
                            <div className='service_card_title'>
                                <h4>Money Back Guarantee</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3  col-md-6 col-sm-6'>
                        <div className='service_card'>
                            <div className='service_card_icon'>
                                <img src={icon02}/>
                            </div>
                            <div className='service_card_title'>
                                <h4>Gift Coupon</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3  col-md-6 col-sm-6'>
                        <div className='service_card'>
                            <div className='service_card_icon'>
                                <img src={icon03}/>
                            </div>
                            <div className='service_card_title'>
                                <h4>Free Shipping</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3  col-md-6 col-sm-6'>
                        <div className='service_card'>
                            <div className='service_card_icon'>
                                <img src={icon04}/>
                            </div>
                            <div className='service_card_title'>
                                <h4>24x7 Support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHome
