import React from 'react';

const Product = ({product, handleAddToCart}) => 
  <div className="products-item">
    <img src={product.image} alt={product.title} />
    <div className="product-item-info">
      <h2>{product.title}</h2>
      <span>$ {product.price}</span>
      <p>{product.description}</p>
    </div>
    <button onClick={()=>handleAddToCart(product)} type="button">Comprar</button>
  </div>
 
export default Product;