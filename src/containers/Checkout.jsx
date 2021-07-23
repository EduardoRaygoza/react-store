import React from "react";
import { Link } from "react-router-dom";

import '../styles/components/Checkout.scss';

const Checkout = () => 
  <div className="checkout">
    <div className="checkout-content">
      <h3>Lista de pedidos</h3>
      <div className="checkout-item">
        <div className="checkout-element">
          <h4>ITEM_NAME</h4>
          <span>$XXX</span>
        </div>
        <button type="button">
          <i className="fas fa-trash-alt"/>
        </button>
      </div>
    </div>
    <div className="checkout-sidebar">
      <h3>Precio total: $XXX</h3>
      <Link to="/checkout/information">
        <button type="button">Continuar pedido</button>
      </Link>
    </div>
  </div>

export default Checkout;