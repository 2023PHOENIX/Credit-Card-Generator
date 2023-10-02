import React from 'react';
import whiteCircle from "../assets/images/Ellipse1.png";
import bgr from "../assets/images/Rectangle27.png";
import circle from "../assets/images/Ellipse2.png";
import ellipse5 from "../assets/images/Ellipse5.png";
import ellipse6 from "../assets/images/Ellipse6.png";



// TODO: Fix the color blur part
function CreditCardFront(props) {
    // 1233445677891123



    const {cardNumber, cardUser, cardExpiry} = props;
    return (

        <div className="credit-front">

            <img src={whiteCircle} className='circle-filled'/>
            <img src={circle} className='circle-hollow'/>
            <div className='ellipse5'/>
            {/*<img src={ellipse6} className='ellipse6' alt="ellipse6"/>*/}
            <div className='ellipse4'/>
            <div className='ellipse7'/>
            <div className="ellipse3"/>
            
            <div className="ellipse6"/>

            <div className='credit-card-number'>{cardNumber.match(/.{1,4}/g).join(' ')}</div>

            <div className='credit-card-holder-name'>
                {cardUser}
            </div>
            <div className='credit-card-expiry'>
                {cardExpiry}
            </div>
        </div>

    );
}

export default CreditCardFront;
