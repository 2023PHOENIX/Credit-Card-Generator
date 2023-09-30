import React from 'react';

function CreditCardBack(props) {
    return (
        <div className='credit-back'>
            <div className='black-strip'></div>
            <div className='cvc-strip'>
                {props && props.cardCvcCode}
            </div>

            <div className='card-footer'>
                <div className='first-line'>
                    <div className="f-line1"></div>
                    <div className="f-line2"></div>
                    <div className="f-line3"></div>
                    <div className="f-line4"></div>
                </div>
                <div className='second-line'>
                    <div className="s-line1"></div>
                    <div className="s-line2"></div>
                    <div className="s-line3"></div>
                    <div className="s-line4"></div>
                </div>
                <div className='third-line'>
                    <div className="t-line1"></div>
                    <div className="t-line2"></div>
                    <div className="t-line3"></div>
                    <div className="t-line4"></div>
                </div>
            </div>

        </div>
    );
}

export default CreditCardBack;