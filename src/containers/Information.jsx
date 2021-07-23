import React from "react";

import '../styles/components/Information.scss';

const Information = () => 
  <div className="information">
    <div className="information-content">
      <div className="information-head">
        <h2>Información de contacto</h2>
      </div>
      <div className="information-form">
        <form>
          <input type="text" name="name" placeholder="Nombre completo" />
          <input type="text" name="email" placeholder="Correo electronico" />
          <input type="text" name="address" placeholder="Dirección" />
          <input type="text" name="number" placeholder="Numero" />
          <input type="text" name="city" placeholder="Ciudad" />
          <input type="text" name="country" placeholder="País" />
          <input type="text" name="state" placeholder="Estado" />
          <input type="text" name="cp" placeholder="Código postal" />
          <input type="text" name="phone" placeholder="Teléfono" />
        </form>
      </div>
      <div className="information-buttons">
        <div className="information-back">
          Regresar
        </div>
        <div className="information-next">
          Pagar
        </div>
      </div>
    </div>
    <div className="information-sidebar">
      <h3>Pedido</h3>
      <div className="information item">
        <div className="information-element">
          <h4>ITEM_NAME</h4>
          <span>$XXX</span>
        </div>
      </div>
    </div>
  </div>;

export default Information;