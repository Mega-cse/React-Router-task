// Carreer.js
import React from 'react';
import Card from './Card';

const Carrer = ({ products }) => {
  const filteredProducts = products.filter((products) => products.course === 'carrer');

  return (
    <div className="card-grid">

      {filteredProducts.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default Carrer;
