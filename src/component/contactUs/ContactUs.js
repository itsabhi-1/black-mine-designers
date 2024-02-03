import React from 'react'

function ContactUs() {
    return (
        <>
            <section className='contact_us'>
                <div className='container-fluid contact-fluid'>
                    <div className='contact_Us_breadcumb'>
                        <div className='bread-main'>
                            <div className=' text-center'>
                                <h5 className='page_heading'>Contact Us</h5>
                            </div>
                        </div>
                    </div>
                    <div className='google_map'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d218.99591578845016!2d77.25640851261689!3d28.57172493995401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a49310c40d%3A0x6447c3a581823339!2sVIJAY%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1703577271236!5m2!1sen!2sin' style={{ border: 0 }} allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
                    </div>
                </div>
                <div className='contact_form'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col-md-6'>
                                        <div className='input_box'>
                                            <input name='name' className='form_info' placeholder='Name*' type='text' required />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='input_box'>
                                            <input name='email' className='form_info' placeholder='Email*' type='email' required />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='input_box'>
                                            <input name='phone' className='form_info' placeholder='Phone' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='input_box'>
                                            <input name='country' className='form_info' placeholder='Country' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='input_box'>
                                            <textarea name='message' className='form_area_tex' placeholder='Your Message*' defaultValue={''} required />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='input_box'>
                                            <button name='submit' className='w-120 sbumit-btn' type='submit'>Submit</button>
                                            <p className='form-messege' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-6'>
                                <div className='single-footer contact-us contact-us-2'>
                                    <div className='contact_info_heading '>
                                        <h5 className='uppercase'>Contact Info</h5>
                                    </div>
                                    <ul className='contact_info'>
                                        <li>
                                            <div className='contact_icon'><i className='zmdi zmdi-phone-paused' /> </div>
                                            <div className='contact_text'>
                                                <p>01234567890</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contact_icon'> <i className='zmdi zmdi-email-open' /> </div>
                                            <div className='contact_text'>
                                                <p><a href='#'>abcd@example.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contact_icon'> <i className='zmdi zmdi-pin-drop' /> </div>
                                            <div className='contact_text'>
                                                <p>144/A, Seventh Streeth, Rampura, NEW DELHI, INDIA</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='social_icon_wraper '>
                                        <div className='social_icon '>
                                            <ul>
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
                            <div className='col-lg-12'>
                                <div className='contact_des'>
                                    <p>We can't wait to hear from you! Whether you have a question about our latest collections, need assistance with sizing, or just want to share your thoughts, our team is here to help. Feel free to reach out to us through the contact form, email, or phone. Your style journey is important to us, and we look forward to being part of it.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
