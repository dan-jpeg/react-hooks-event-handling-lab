// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {

    function handleFocus() {
        console.log('Good!')
    }

    function handleBlur() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <btn onFocus={handleFocus}
             onBlur={handleBlur}>
                Eyes on me
                </btn>
    )
}

export default EyesOnMe