import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';

import '../styles/components/Products.scss';

const Products = () => {
  const {products, addToCart} = useContext(AppContext);
  const handleAddToCart = product => {
    addToCart(product);
  }
  return(
    products.length > 0 ?
    <div className="products">
      <div className="products-items">
        {
          products.map( product => <Product 
            key={product.id} 
            product={product}
            handleAddToCart={handleAddToCart}
          /> )
        }
      </div>
    </div> : <h1>Cargando...</h1>
  );
};
 
export default Products;