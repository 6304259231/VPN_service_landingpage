import React from 'react'
import './Head.css'

function Head() {
  return (
    <div id='head-section'>
        <div id='head-aside' >
            <div id='head-head' class='head-item'>
                <p>Want anything to be easy with <b>LaslesVPN.</b></p>
            </div>
            <div id='head-para' class='head-item'>
                <p>Provide a network for all your needs with ease and fun using <b> LaslesVPN</b> discover interesting features from us.</p>
            </div>
            <div className='head-item'>
            <button type="button" class='getstarted-btn'>Get Started</button>
            </div>
        </div>
        <div id='head-img-section'>
            <img src='../images/imgs/main_head_1.svg' alt='illustration_img_1'></img>
        </div>
    </div>
  )
}

export default Head