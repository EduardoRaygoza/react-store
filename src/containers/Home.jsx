import React, { useContext } from "react";
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import Products from '../components/Products';

const Home = () => {
  const {products} = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>React store - Home</title>
      </Helmet>
      <Products products={products}/>
    </>
  );
}
export default Home;