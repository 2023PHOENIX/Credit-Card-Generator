import React, {useEffect, useState} from "react";
// 1233445677891123
// rendered using prop drilling.

import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreditCardForm(props) {
    const [userInput, setUserInput] = useState({
        firstName: "",
        cvcCode: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
    });
    const {setCardDetails} = props;
    const [err, setErr] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setUserInput({...userInput, [name]: value});
    };

    const errorChecks = () => {
        const error = {};

        if (userInput.firstName.trim() === "") {
            error.firstName = "Cardholder name required";
        }

        if (userInput.cardNumber.trim() === "") {
            error.cardNumber = "Card number required";
        }
        if (userInput.cardNumber.length !== 16) {
            error.cardNumber = "Card length is not valid. Make it 16 digit length";
        }
        if (userInput.cvcCode.trim() === "") {
            error.cvcCode = "CVC is required";
        } else if (isNaN(userInput.cvcCode) || userInput.cvcCode.length !== 3) {
            error.cvcCode = "CVC must be numeric and with 3 digits";
        }

        const currentDate = new Date();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        console.log(month, year);
        console.log(Number(userInput.expiryMonth), Number(userInput.expiryYear));
        if (
            userInput.expiryYear < year
        ) {
            error.expiryYear = "expiry date is not valid";
        }
        if(Number(userInput.expiryYear) === Number(year) && Number(userInput.expiryMonth) < Number(month)){
            error.expiryYear = "invalid";
        }
        if((userInput.expiryYear.length === 4) === false){

            error.expiryYear = "year must be in format of 2000"
        }

        console.log(error);

        setErr(error);
        return Object.keys(error).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const notify = () => {
            toast.success("Credit Card Successfully updated! 👍", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        };

        const ErrorNotify = () => {
            toast.error("Credit Card is not valid", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        };

        const noErr = errorChecks();

        if (noErr) {
            const expiry = `${userInput.expiryMonth}/${
                userInput.expiryYear.substring(2)
            }`;
            setCardDetails({
                card_number: userInput.cardNumber,
                card_cvc: userInput.cvcCode,
                card_username: userInput.firstName,
                card_expiry: expiry,
            });
            notify();
        } else {
            ErrorNotify();
        }
    };
    return (
        <div className="user-form-input">
            <div className="input-area">
                <div className="input-text">CARDHOLDER NAME</div>
                <input
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                />
                {err.firstName && <div className="error">{err.firstName}</div>}
            </div>
            <div className="input-area">
                <div className="input-text">CARD NUMBER</div>
                <input
                    onChange={handleChange}
                    name="cardNumber"
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                />
                {err.cardNumber && <div className="error">{err.cardNumber}</div>}
            </div>

            <div className="second-input-area">
                <div className="expiry-date-input input-area">
                    <div className="input-text">EXP. DATE (MM/YY)</div>
                    <div className="expiry-mm-dd">
                        <input
                            onChange={handleChange}
                            name="expiryMonth"
                            type="number"
                            placeholder="MM"
                        />
                        <input
                            onChange={handleChange}
                            name="expiryYear"
                            type="number"
                            placeholder="YY"
                        />
                    </div>
                    {err.expiryYear && <div className="error">{err.expiryYear}</div>}
                </div>
                <div className="cvc-input input-area">
                    <div className="input-text">CVC</div>

                    <input
                        onChange={handleChange}
                        type="text"
                        name="cvcCode"
                        placeholder="e.g. 123"
                    />
                    {err.cvcCode && <div className="error">{err.cvcCode}</div>}
                </div>
            </div>

            <button type="submit" onClick={handleSubmit} className="button-submit">
                Confirm
            </button>
        </div>
    );
}

export default CreditCardForm;
