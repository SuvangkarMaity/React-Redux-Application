import React from 'react';
import { useState } from 'react';

function Incrementor(props) {
    const [count, setCount] = useState(0);

    const handleClick =()=>{
        setCount (count+1)

    }

    return (

        <div>
            <h1>Welcome to Incrementor</h1>
            <h2>Value of count:{count}</h2>
            <button onClick={handleClick}>Incrementor</button>
        </div>
    );
}

export default Incrementor;




