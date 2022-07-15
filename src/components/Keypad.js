// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleChange(){
        console.log('Entering password...');
    }
    return(
        <>
             <input type="password" name="enter password" onChange={handleChange} placeholder="ENTER PASSWORD" />
        </>
    );
}

export default Keypad;