import React, { useContext } from 'react';
import { Context } from './App';

function Home() {
    const { username } = useContext(Context);
    return (
        <div className="container text-center mt-5">
            <h1>Home Page</h1>
            <h2 className="mt-3">Welcome, {username || "Guest"}</h2>
        </div>
    );
}

export default Home;
