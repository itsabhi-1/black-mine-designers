import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/image/logo.jpg'

function Navbar() {
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/aboutus', label: 'about' },
        { to: '/contact', label: 'Contact Us' },
    ];
    return (
        <section className='nav_section'>
            <div className='top_nav '>
                <div>
                    <img src={logo} />
                </div>
            </div>
            <nav className='navbar navbar-expand-lg  nav_bar'>
                <div className='container-fluid'>
                    <button className='navbar-toggler ' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        {/* <span className='navbar-toggler-icon' /> */}
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className='collapse navbar-collapse ' id='navbarNav'>
                        <ul className='navbar-nav navbar_nav m-auto'>
                            <li className={location.pathname === '/' ? 'active' : ''}>
                                <Link to='/' className='nav-link nav_link'>home</Link>
                            </li>
                            <li className='nav-item nav_item'>
                                <a className='nav-link nav_link' href='#'>brand</a>
                            </li>
                            <li className='nav-item nav_item'>
                                <a className='nav-link nav_link' href='#'>services</a>
                            </li>
                            <li className={location.pathname === '/aboutus' ? 'active' : ''}>
                                <Link to='/aboutus' className='nav-link nav_link' href='#'>about us</Link>
                            </li>
                            <li className='nav-item nav_item'>
                                <a className='nav-link nav_link' href='#'>gallery</a>
                            </li>
                            <li className={location.pathname === '/contactus' ? 'active' : ''}>
                                <Link to='/contactus' className='nav-link nav_link' href='#'>contact US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </section>
    )
}

export default Navbar;
