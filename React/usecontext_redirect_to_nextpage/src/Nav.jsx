import React from "react";
function Nav({setPage}) {
    return(
        <nav style={navStyle}>
            <button onClick={() => setPage("login")} style={buttonStyle}>Login</button>
            <button onClick={() => setPage("home")} style={buttonStyle}>Home</button>
            <button onClick={() => setPage("product")} style={buttonStyle}>Product</button>
        </nav>
    );
}

//Style
const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#eee'
};
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer'
}

export default Nav;