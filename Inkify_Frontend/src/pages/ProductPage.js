import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

function ProductPage({ addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Product Catalog</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Link to="/cart">Go to Cart</Link>
        </div>
    );
}

export default ProductPage;
