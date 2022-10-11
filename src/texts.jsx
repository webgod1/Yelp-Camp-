import React, {useState} from 'react';

function State() {
    const [text, sec] = useState("Hello World");
    const click = ()=>{
        if (text === "Hello World") {
            sec("What up")
        } else {
            sec("Hello World")
        }
    }
    return(
        <div className='container'>
            <h1>{text}</h1>
            <button className='btn' type='button' onClick={click}>Click</button>
        </div>
    )
}

export default State;