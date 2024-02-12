import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div id='nav-main'>
            <div id='nav-logo-section'>
                    <img src="../images/logo/logo_vpn.svg" alt="logo_VPN"></img>
            </div>
            <div id='nav-items-section'>
                <ul>
                    <li className='nav-item'> <a href='#'> About</a></li>
                </ul>
                <ul>
                    <li className='nav-item'> <a href='#'> Feauters</a></li>
                </ul>
                <ul>
                    <li className='nav-item'> <a href='#'> Pricing</a></li>
                </ul>
                <ul>
                    <li className='nav-item'> <a href='#'> Testimonials</a></li>
                </ul>
                <ul>
                    <li className='nav-item'> <a href='#'> Help</a></li>
                </ul>
            </div>
            <div id='signin-section'>
                <div className='signin'>
                    <b>Sign In</b>
                </div>
                <div className='signup-btn'>
                    <button type="button" class="btn btn-outline-danger" style={{ width: '150px', height : '45px' ,  borderRadius : '50px' }}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar