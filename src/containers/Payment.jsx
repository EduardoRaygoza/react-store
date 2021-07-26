import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {PayPalButton} from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/sumTotal';
import '../styles/components/Payment.scss';

const Payment = () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: process.env.CLIENT_ID_PP,
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data 
      }
      addNewOrder(newOrder);
      history.push('/checkout/success/')
    }
  }

  return (  
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map( item => 
            <div className="payment-item" key={item.title}>
              <div className="payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>  
          )
        }
        <div className="payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal(cart)}
            onSuccess={ data => handlePaymentSuccess(data)}
            onError={ error => console.log(error)}
            onCancel={ data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
}
export default Payment;