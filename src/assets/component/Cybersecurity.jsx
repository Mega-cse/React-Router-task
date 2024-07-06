// Cybersecurity.js
import React from 'react';
import Card from './Card';

const Cybersecurity = ({ products }) => {
  const filteredProducts = products.filter((products) => products.course === 'cs');

  return (
    <div className="card-grid">
     
      {filteredProducts.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default Cybersecurity;