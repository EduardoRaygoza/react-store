import React from "react";

import '../styles/components/Success.scss';

const Success = () => 
  <div className="success">
    <div className="success-content">
      <h2>Gracias por tu compra NOMBRE_PLACEHOLDER!</h2>
      <span>Tu pedido llegará en 3 días a tu ubicación</span>
    </div>
    <div className="success-map">
      Google Maps
    </div>
  </div>

export default Success;