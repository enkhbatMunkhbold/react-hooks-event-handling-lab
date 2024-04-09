import React from "react";

function Keypad (){

    const handleChange = () => {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" name="password" onChange={() => console.log('Entering password...')}/>
        </div>
    )
}

export default Keypad;