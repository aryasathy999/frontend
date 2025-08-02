import React, { useContext } from "react";
import { Context } from "./App";

function Product() {
 const { setCart, setPage } = useContext(Context);
 const products = [
 { id: 1, name: "Product 1", price: 100 },
 { id: 2, name: "Product 2", price: 200 },
 { id: 3, name: "Product 3", price: 300 }
 ];
 const handleAddToCart = (product) => {
//  setCart((prevCart) => [...prevCart, product]); // Add product to the cart array
//  setPage("invoice"); // Redirect to Invoice Page
setCart((prevCart) => {
    const updatedCart = [...prevCart,product];
    setTimeout(() => setPage("invoice"), 0);
    return updatedCart;
});
 };
 return (
 <div style={containerStyle}>
 <h1>Product Page</h1>
 {products.map((product) => (
 <div key={product.id} style={productStyle}>
 <h3>{product.name}</h3>
 <p>Price: ${product.price}</p>
 <button onClick={() => handleAddToCart(product)} style={buttonStyle}>
 Add to Cart
 </button>
 </div>
 ))}
 </div>
 );
 }
 // Styles
 const containerStyle = {
 textAlign: 'center',
 marginTop: '50px'
 };
 const productStyle = {
 border: '1px solid #ccc',
 padding: '10px',
 margin: '10px',
 width: '200px',
 display: 'inline-block'
 };
 const buttonStyle = {
 padding: '10px 20px',
 fontSize: '14px',
 cursor: 'pointer',
 marginTop: '10px'
 };
 
 export default Product;
