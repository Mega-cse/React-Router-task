// Card.js
import React from 'react';

const Card = ({ products }) => {
  return (
    <div className="card">
      <img src={products.image} alt={products.name}className="card-image" />
      <h2>{products.name}</h2>
      <p>By {products.author}</p>
      <p>{products.date}</p>
      <p >{products.readtime}</p>
    </div>
  );
};

export default Card;