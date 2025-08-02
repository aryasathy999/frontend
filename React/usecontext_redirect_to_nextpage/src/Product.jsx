import React, { useContext } from 'react';
import { Context } from './App';

function Product() {
    const { username } = useContext(Context);
    return (
        <div className="container text-center mt-5">
            <h1>Product Page</h1>
            <h2 className="mt-3">Hello, {username || "Guest"} Explore Our Products</h2>
        </div>
    );
}

export default Product;
