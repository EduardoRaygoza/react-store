import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';

import '../styles/components/Header.scss';

const Header = () => {
  const {state} = useContext(AppContext);
  const {cart} = state;
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-title">React store</h1>
      </Link>
      <div className="header-checkout">
        <Link to="/checkout/">
          <i className="fas fa-shopping-basket"/>
        </Link>
        {
          cart.length > 0 &&
          <div className="header-alert">
            {
              cart.length
            }
          </div>
        }
      </div>
    </div>
  );
}
export default Header;