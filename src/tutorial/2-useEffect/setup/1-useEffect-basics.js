import React, { useState, useEffect } from 'react';

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(()=>{

    if(value >= 1){

      document.title = `New Message (${value})`

    }
  },[value])


  const handleClick = () =>{
    setValue(()=>value+1)
  }
  return (
    <>
    <h2>{value}</h2>
    <button className='btn' onClick={handleClick}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
