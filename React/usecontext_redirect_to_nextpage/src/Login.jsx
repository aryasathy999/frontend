import React, { useState, useContext } from 'react';
import { Context } from './App';

function Login() {
    const { setUsername, setPage } = useContext(Context);
    const [input, setInput] = useState("");
    const handleLogin = () => {
        setUsername(input);
        setPage("home");
    };
    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Login Page</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control w-50 mx-auto"
                    placeholder="Enter username"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button onClick={handleLogin} className="btn btn-primary px-4">Login</button>
        </div>
    );
}

export default Login;
