import React from 'react'
import product01 from '../../assets/image/tShirts/product01.jpg'
import product02 from '../../assets/image/tShirts/product02.jpg'
import product03 from '../../assets/image/tShirts/product03.jpg'
import product04 from '../../assets/image/tShirts/product04.jpg'
import product05 from '../../assets/image/tShirts/product05.jpg'
import product06 from '../../assets/image/tShirts/product06.jpg'
import product07 from '../../assets/image/tShirts/product07.jpg'
import product08 from '../../assets/image/tShirts/product08.jpg'
import product09 from '../../assets/image/tShirts/product09.jpg'
import { Link } from 'react-router-dom'
function TShirts() {
    return (
        <section className='cl_tshirts'>
            <div className='container'>
                <h1 className='main_heading'>T-Shirts</h1>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product01} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men black Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product02} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product03} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men black Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product04} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men black & White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product05} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product06} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product07} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product08} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='pd_card'>
                            <div className='product_img'>
                                <img src={product09} />
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_heading'><a>black mine | Men White Solid Round Neck Pure Cotton T-shirt</a></h3>
                                <p className='product_price'>₹2,999</p>
                            </div>
                            <div className='product_btn mt-3'>
                                <Link to='/gridproduct' className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product_btn'>
                    <Link to='/gridproduct' className='btn-primary view_btn'>view all products</Link>
                </div>
            </div>
        </section>
    )
}

export default TShirts
