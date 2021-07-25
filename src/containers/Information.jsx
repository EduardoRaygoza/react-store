import React, {useRef, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from '../context/AppContext';

import '../styles/components/Information.scss';

const Information = () => {
  const {state, addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const {cart} = state;
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      number: formData.get('number'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment/');
  }

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
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
            <Link to="/checkout/">
              Regresar
            </Link>
          </div>
          <div className="information-next">
            <button onClick={handleSubmit} type="button">Pagar</button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido</h3>
        {
          cart.map( item => 
            <div className="information item" key={item.title}>
              <div className="information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default Information;