import React from 'react';
import './Users.css';

function Users() {
    return (
        <div id='users-section'>
            <div className='user-logo-item'>
                <div className='user-logo users'>
                   <img src='../images/logo/user.png'></img>
                </div>
                <div className='user-info'>
                    <b>90+</b>
                    <p>users</p>
                </div>
            </div>
            <hr/>
            <div className='user-logo-item'>
                <div className='location-logo users'>
                <img src='../images/logo/location.png'></img>
                </div>
                <div className='user-info'>
                    <b>30+</b>
                    <p>Locations</p>
                </div>
            </div>
            <hr/>
            <div className='user-logo-item'>
                <div className='services-logo users'>
                <img src='../images/logo/Server.png'></img>
                </div>
                <div className='user-info'>
                    <b>50+</b>
                    <p>Services</p>
                </div>
            </div>
        </div>
    )
}

export default Users