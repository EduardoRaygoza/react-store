import React from 'react';
import { Link } from "react-router-dom";

import '../styles/components/Header.scss';

const Header = () => 
  <div className="header">
    <Link to="/">
      <h1 className="header-title">React store</h1>
    </Link>
    <div className="header-checkout">
      <Link to="/checkout/">
        <i className="fas fa-shopping-basket"/>
      </Link>
    </div>
  </div>;
 
export default Header;