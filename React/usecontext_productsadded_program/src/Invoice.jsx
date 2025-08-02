// import React,{useContext} from 'react';
// import {Context} from './App';

// function Invoice(){
//     const {cart} = useContext(Context);
//     return(
//         <div style={containerStyle}>
//             <h1>Invoice Page</h1>
//             {cart.length > 0 ? (
//                 <div>
//                     <h2>Your Cart</h2>
//                     <ul>
//                         {cart.map((product,index) => (
//                             <li key={index}>
//                                 <h3>{product.name}</h3>
//                                 <p>Price: ${product.price}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>Your cart is empty!</p>
//             )}
//         </div>
//     );
// }

// //Styles
// const containerStyle={
//     textAlign: 'center',
//     maerginTop: '50px'
// };

// export default Invoice;

import React, {useContext, useState, useCallback} from 'react';
import {Context} from './App';

function Invoice(){
    const {cart,setCart}=useContext(Context); //Ensure `setCart` is available in Context
    const [removedItems,setRemovedItems]=useState([]); //Track removed items
    // console.log("Invoice cart:", cart);
    //Handle product removal
    const handleRemove = useCallback(
        (product,index) => {
            setCart((cart) => {
                const newCart = [...cart]; //Create a copy of the cart
                newCart.splice(index,1); //Remove one item at the specified index
                return newCart;
            });
            setRemovedItems((prevRemoved) => [product, ...prevRemoved]); //Add to removed items
        },
        [setCart]
    );

    const handleUndo = useCallback(() => {
        if(removedItems.length > 0) {
            const lastremoved=removedItems[0];
            setCart((prevCart) => [...prevCart,lastremoved]); //Add the last removed item back to the last removed
            setRemovedItems((prevRemoved) => prevRemoved.slice(1)); //Remove it from the removed list
        }
    }, [removedItems, setCart]);

    return(
        <div style={containerStyle}>
            <h1>Invoice Page</h1>
            {cart.length > 0 ? (
                <div>
                    <h2>Your Cart</h2>
                    <ul>
                        {cart.map((product,index) => (
                            <li key={index}>
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <button onClick={() => handleRemove(product,index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Your cart is empty!</p>
            )}
            {removedItems.length > 0 ? (
                <button onClick={handleUndo} style={{marginTop: "20px"}}>Undo Last Remove</button>
            ) : ""}
        </div>
    )
}

 const containerStyle = {
 textAlign: 'center',
 marginTop: '50px'
 };

export default Invoice;