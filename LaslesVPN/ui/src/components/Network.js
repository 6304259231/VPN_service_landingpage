import React from 'react'
import './Network.css'

function Network() {
    return (
        <div id='network-section'>
            <center id='plans-head-section'>
                <h2>Huge Global Network of Fast VPN</h2>
                <p>See <b>LaslesVPN </b> everywhere to make it easier for you when you move locations.</p>
            </center>
            <div className='global-img-section globe'>
                <img src='../images/imgs/global.png' alt='globe_image'></img>
            </div>
            <div className='global-img-section sponsored'>
                <img src='../images/imgs/Sponsored.png' alt='sponsers_image'></img>
            </div>
        </div>
    )
}

export default Network