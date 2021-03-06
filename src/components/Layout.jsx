import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/components/Layout.scss'

const Layout = ({children}) => 
  <div className="main">
    <Header/>
    {children}
    <Footer/>
  </div>;

 
export default Layout;