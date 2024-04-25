// Code Keypad Component Here
import React from "react";
function Keypad (){
    function message(){
        console.log("Entering password...")
    }
    return (
        <div>
            <form>
         <input type="password" onChange={message}/>
         </form>
        </div>
    )
}


export default Keypad;