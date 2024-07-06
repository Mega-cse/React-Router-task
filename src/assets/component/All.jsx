// All.js
import React from 'react';
import Card from './Card';

const All = ({ products }) => {
  return (
    <div className='card-grid'>
     
      {products.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default All;