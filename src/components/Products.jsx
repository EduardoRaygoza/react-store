import React from 'react';
import Product from './Product';

import '../styles/components/Products.scss';

const Products = ({products}) => 
  <div className="products">
    <div className="products-items">
      {
        products.map( product => <Product key={product.id} product={product}/> )
      }
    </div>
  </div>;
 
export default Products;