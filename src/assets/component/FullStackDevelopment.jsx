import React from 'react';
import Card from './Card';

const FullStackDevelopment= ({ products }) => {
  const filteredProducts = products.filter((products) => products.course === 'fsd');

  return (
    <div className="card-grid">
      {filteredProducts.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default FullStackDevelopment;