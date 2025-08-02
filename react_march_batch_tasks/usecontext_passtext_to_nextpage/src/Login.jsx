import React,{useContext, useState} from 'react';
import {Context} from './App';

function Login() {
    const {setUsername, setPage}=useContext(Context);
    const [input,setInput]=useState("");
    const handleLogin = () => {
        setUsername(input);
        setPage("home");
    }
    return(
        <div style={containerStyle}>
            <h1>Login Page</h1>
            <input
            type="text"
            value={input}
            placeholder='Enter text'
            onChange={(e) => setInput(e.target.value)}
            style={inputStyle}
            />
            <button onClick={handleLogin} style={buttonStyle}>Login</button>
        </div>
    );
}

//Styles
const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
};
const inputStyle = {
    padding: '10px',
    margin: '10px',
    fontSize: '16px'
};
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
};

export default Login;
