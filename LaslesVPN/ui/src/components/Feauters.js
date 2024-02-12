import React from 'react';
import './Feauters.css';

function Feauters() {
  return (
    <div id='future-section'>
         <div className='future-img'>
            <img src='../images/imgs/illustration_2.png' alt='image_2'></img>
         </div>
         <div className='future-info'>
            <div className='info-head'>
              <h2>We Provide Many Features You Can Use</h2>
            </div>
            <div className='info-head'>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            </div>
            <ul>
                <li> 
                    <img src='../images/logo/right_tick_logo.png'></img>
                    <p>Powerfull online protection.</p>
                </li>
                <li> 
                    <img src='../images/logo/right_tick_logo.png'></img>
                    <p>Internet without borders.</p>
                </li>
                <li> 
                    <img src='../images/logo/right_tick_logo.png'></img>
                    <p>Supercharged VPN</p>
                </li>
                <li> 
                    <img src='../images/logo/right_tick_logo.png'></img>
                    <p>No specific time limits.</p>
                </li>
            </ul>
         </div>
    </div>
  )
}

export default Feauters