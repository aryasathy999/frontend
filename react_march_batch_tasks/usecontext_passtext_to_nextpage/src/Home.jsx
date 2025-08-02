import React,{useContext} from "react";
import {Context} from './App';

function Home() {
    const {username}=useContext(Context);
    return(
        <div style={containerStyle}>
            <h1>Home Page</h1>
            <h2>Welcome {username || "Guest"}</h2>
        </div>
    );
}

//Styles
const containerStyle = {
    textAlign: 'center',
    marginTop: '50px'
};

export default Home;