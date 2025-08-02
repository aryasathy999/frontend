import React,{useContext} from 'react';
import {Context} from './App';

function Field(){
    const[inputText,setInputText]=useContext(Context);
    return(
        <>
        <input
        type="text"
        value={inputText}
        placeholder='Type Something'
        onChange={(e) => setInputText(e.target.value)} 
        /><
        h2>{inputText}</h2>
        </>
    );
}
export default Field;
