import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

function CollectionPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => {
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        console.error('No products found');
      }
    });
  }, []);

  return (
    <div className="collection-page">
      <h1>Our Collection</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default CollectionPage;
