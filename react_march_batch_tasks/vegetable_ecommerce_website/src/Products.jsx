import React,{useCallback, useState, useMemo} from 'react';

const productsList = [
  { id: 1, name: 'Banana', price: 20.99, image: 'banana.jpg' },
  { id: 2, name: 'Watermelon', price: 20.99, image: 'watermelon.jpg' },
  { id: 3, name: 'Cherry', price: 20.99, image: 'cherry.jpg' },
  { id: 4, name: 'Grapes', price: 20.99, image: 'grapes.webp' },
  { id: 5, name: 'Lettuce', price: 20.99, image: 'lettuce.jpg' },
  { id: 6, name: 'Apple', price: 20.99, image: 'apple.jpg' },
  { id: 7, name: 'Orange', price: 20.99, image: 'orange.jpg' },
  { id: 8, name: 'Broccoli', price: 20.99, image: 'broccoli.jpg' },
  { id: 9, name: 'Carrot', price: 20.99, image: 'carrot.jpg' },
  { id: 10, name: 'Big Watermelon', price: 20.99, image: 'bigwatermelon.jpg' },
  { id: 11, name: 'Cucumber', price: 20.99, image: 'cucumber.jpg' },
  { id: 12, name: 'Muskmelon', price: 20.99, image: 'muskmelon.jpg' },
];

function Products(){
    const[cart,setCart]=useState([]);
    const[lastRemoved, setLastRemoved]=useState(null); //{item,index} indicates which item at which index
    const handleAddToCart = (product) => {
        setCart([...cart,product]);
    };

    const calculateTotal = useMemo(() => {
        const total=cart.reduce((acc,item) => acc+item.price,0);
        const gst=total*0.18;
        return(total+gst).toFixed(2);
    },[cart]);

    const handleRemoveFromCart = useCallback((index) => {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const removedItem = updatedCart.splice(index,1)[0]; //[0]-removes only item which is selected by the user
        setLastRemoved({ item: removedItem, index});
        return updatedCart;
      });
    },[]);

    const handleUndo = useCallback(() => {
      if(lastRemoved) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          updatedCart.splice(lastRemoved.index,0,lastRemoved.item);
          return updatedCart;
        });
        setLastRemoved(null);
      }
    },[lastRemoved]);

    const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const productGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px',
    width: '180px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fefefe',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'contain',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const removeButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    marginTop: '10px'
  };

  const undoButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px'
  };

  const summaryStyle = {
    marginTop: '30px',
    backgroundColor: '#f2f2f2',
    padding: '15px',
    borderRadius: '10px',
    maxWidth: '300px',
  };
    return(
        <div style={containerStyle}>
            <h2>Fresh Products</h2>
            <div style={productGridStyle}>
                {productsList.map((product) => (
                    <div key={product.id} style={cardStyle}>
                        <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        style={imageStyle}
                        />
                        <h4>{product.name}</h4>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)} style={buttonStyle}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div style={summaryStyle}>
                <h3>Cart Summary</h3>
                <p>Items in cart: {cart.length}</p>
                <ul style={{paddingLeft: '20px'}}>
                    {cart.map((item,index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button onClick={() => handleRemoveFromCart(index)} style={removeButtonStyle}>Remove</button>
                        </li>
                    ))}
                </ul>
                <p>Total (with 18% gst): <strong>${calculateTotal}</strong></p>         
                {lastRemoved && (
                  <button onClick={handleUndo} style={undoButtonStyle}>Undo Remove</button>
                )}
            </div>
        </div>
    );
}

export default Products;