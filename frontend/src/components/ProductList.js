import React from 'react';
import './ProductList.css'; // Import CSS file

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-heading">Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
