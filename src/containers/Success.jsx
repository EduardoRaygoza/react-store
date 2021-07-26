import React, {useContext} from "react";
import AppContext from '../context/AppContext';
import Map from '../components/Map';

import '../styles/components/Success.scss';

const Success = () => {
  const {state} = useContext(AppContext);
  const buyer = state.buyer[state.buyer.length-1];
  return (
    <div className="success">
      <div className="success-content">
        <h2>{`Gracias por tu compra ${buyer.name}!`}</h2>
        <span>Tu pedido llegará en 3 días a tu ubicación</span>
      </div>
      <div className="success-map">
        <Map/>
      </div>
    </div>
  )
}
export default Success;