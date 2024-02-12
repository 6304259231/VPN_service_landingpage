import React from 'react';
import './Plans.css';

function Plans() {
    return (
        <div id='plans-section'>
            <center id='plans-head-section'>
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </center>
            <div id='select-plans-section'>
                <div className='card'>
                    <div className='top-section'>
                        <div class='top-img'>
                            <img src='../images/imgs/card_img.png' alt='plans_card 1'></img>
                        </div>
                        <h2>Free Plan</h2>
                        <div className='feautures-img'>
                            <img src='../images/imgs/free_plan.png' alt='plans_card 1'></img>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <h2>Free</h2>
                        <button type="button" className="btn btn-outline-danger" style={{ width: '150px', height : '45px' ,  borderRadius : '50px' }}>Select</button>
                    </div>
                </div>
                <div className='card'>
                    <div className='top-section'>
                        <div className='top-img'>
                            <img src='../images/imgs/card_img.png' alt='plans_card 1'></img>
                        </div>
                        <h2>Standard Plan</h2>
                        <div className='feautures-img'>
                            <img src='../images/imgs/standard_plan.png' alt='plans_card 1'></img>
                        </div>
                    </div>
                    <div className ='bottom-section'>
                        <h2> <b>$9</b> <small> / mo</small></h2>
                        <button type="button" className="btn btn-outline-danger" style={{ width: '150px', height : '45px' ,  borderRadius : '50px' }}>Select</button>
                    </div>
                </div>
                <div className='card c-active'>
                    <div className='top-section'>
                        <div className='top-img'>
                            <img src='../images/imgs/card_img.png' alt='plans_card 1'></img>
                        </div>
                        <h2>Premium Plan</h2>
                        <div className='feautures-img'>
                            <img src='../images/imgs/premium_plan.png' alt='plans_card 1'></img>
                        </div>
                    </div>
                    <div className ='bottom-section' style={{paddingBottom : '18px'}}>
                        <h2><b>$12</b> <small> / mo</small></h2>
                        <button type="button" className="btn btn-outline-danger active" style={{ width: '150px', height : '45px' ,  borderRadius : '50px' }}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans