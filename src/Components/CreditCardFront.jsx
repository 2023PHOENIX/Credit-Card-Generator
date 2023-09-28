import React from 'react';
import whiteCircle from "../assets/images/Ellipse1.png";
import bgr from "../assets/images/Rectangle27.png";
import circle from "../assets/images/Ellipse2.png";
import ellipse5 from "../assets/images/Ellipse5.png";
import ellipse6 from "../assets/images/Ellipse6.png";


// TODO: Fix the color blur part
function CreditCardFront() {

    return (

        <div className="card-front">

            <img src={whiteCircle} className='circle-filled'/>
            <img src={circle} className='circle-hollow'/>
            <div className='ellipse5'/>
            {/*<img src={ellipse6} className='ellipse6' alt="ellipse6"/>*/}
            <div className='ellipse4'/>
            <div className='ellipse7'/>
            <div className="ellipse3"/>

            <div className='credit-card-number'>0000 0000 0000 0000</div>

            <div className='credit-card-holder-name'>
                JANE APPLESEED
            </div>
            <div className='credit-card-expiry'>
                00/00
            </div>
        </div>

    );
}

export default CreditCardFront;