import React from "react";


function Keypad (){

     function handleChange () {
        console.log('Entering password...')
    }

    return (
    
        <div>
            <input onChange={handleChange} type='password'></input>
        </div>
    )
}

export default Keypad;