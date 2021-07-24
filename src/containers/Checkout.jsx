import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';

import '../styles/components/Checkout.scss';

const Checkout = () => {
  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;
  const handleRemove = product => {
    removeFromCart(product);
  }
  const handleSumTotal = () => {
    const sum = cart.map(item => item.price).reduce( (acc, cur) => acc+cur);
    return sum;
  }
  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3> }
        {
          cart.map( item => 
            <div className="checkout-item">
              <div className="checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button onClick={()=>{handleRemove(item.id)}} type="button">
                <i className="fas fa-trash-alt"/>
              </button>
            </div>   
          )
        }
      </div>
      {
        cart.length > 0 &&
        <div className="checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      }
    </div>
  );
}
export default Checkout;