// Datascience.js
import React from 'react';
import Card from './Card';

const Datascience = ({ products }) => {
  const filteredProducts = products.filter((products) => products.course === 'ds');

  return (
    <div className="card-grid">
      {filteredProducts.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default Datascience;