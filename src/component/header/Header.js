import React, { Component } from 'react';

import slider01 from '../../assets/image/banner/slider01.jpg'
import slider02 from '../../assets/image/banner/slider02.jpg'
import slider03 from '../../assets/image/banner/slider03.jpg'
import slider04 from '../../assets/image/banner/slider04.jpg'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default class Header extends Component {

    render() {
        return (
            <section className='banner_sec'>
                <div id='carouselExampleFade' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src={slider01} className='d-block w-100' alt='...' />
                        </div>
                        <div className='carousel-item'>
                            <img src={slider02} className='d-block w-100' alt='...' />
                        </div>
                        <div className='carousel-item'>
                            <img src={slider03} className='d-block w-100' alt='...' />
                        </div>
                        <div className='carousel-item'>
                            <img src={slider04} className='d-block w-100' alt='...' />
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true' />
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true' />
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </section>
        );
    }
}
