import React,{useContext} from 'react';
import {Context} from './App';
function Btn(){
    const [signedIn, setSignedIn]=useContext(Context);
    return (
        <button onClick={() => setSignedIn(!signedIn)}>
            {signedIn ? 'Sign Out' : 'Sign In'}
        </button>
    );
}
export default Btn;