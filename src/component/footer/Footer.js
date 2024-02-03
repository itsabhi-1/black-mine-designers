import React from 'react'

function Footer() {
    return (
        <section className='cl_footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className='footer_heading'>FOR ORDER INQUIRIES</h2>
                        <div className='footer_detail'>
                            <p><span>Address:</span>Your address goes here</p>
                            <p>info@example.com</p>
                            <p>+91 1234567891</p>
                            {/* <p></p> */}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h2 className='footer_heading'>GET MORE UPDATES</h2>
                        <form className='footer_email'>
                            <input type='email' name='email' placeholder='Enter your email address' />
                            <br />
                            <button type='submit' className='btn-primary'>Subscribe</button>
                        </form>
                    </div>
                    <div className='col-md-4'>
                        <div className='social_icon'>
                            <h2 className='footer_heading'>SOCIAL NETWORK</h2>
                            <ul >
                                <li><a href='#'><i className='zmdi zmdi-facebook' /></a></li>
                                <li><a href='#'><i className='zmdi zmdi-google-glass' /></a></li>
                                <li><a href='#'><i className='zmdi zmdi-youtube' /></a></li>
                                <li><a href='#'><i className='zmdi zmdi-whatsapp' /></a></li>
                                <li><a href='#'><i className='zmdi zmdi-linkedin' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
