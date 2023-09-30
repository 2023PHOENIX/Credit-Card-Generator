import "./App.css";
import CreditCardFront from "./Components/CreditCardFront.jsx";
import CreditCardBack from "./Components/CreditCardBack.jsx";
import CreditCardForm from "./Components/CreditCardForm.jsx";
import {useState} from "react";



function App() {

    const [cardDetails, setCardDetails] = useState({
        card_number: "0000000000000000",
        card_username: "Jane Appleseed",
        card_expiry: "00/00",
        card_cvc: "000"
    });


    const {card_cvc} = cardDetails;
    return (<>

            <div className="app">
                <div className="left-side">
                    <div className='credit-info-front'>

                        <CreditCardFront cardNumber={cardDetails.card_number}
                                         cardUser={cardDetails.card_username}
                                         cardExpiry={cardDetails.card_expiry}
                        />
                    </div>
                    <div className='credit-info-back'>

                        <CreditCardBack cardCvcCode={card_cvc}/>
                    </div>
                </div>


                <div className="right-side">
                    <CreditCardForm
                        setCardDetails={setCardDetails}

                    />
                </div>


            </div>

        </>

    )
        ;
}

export default App;
