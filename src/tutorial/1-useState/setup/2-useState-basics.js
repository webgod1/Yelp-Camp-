// import React, { useState } from 'react';

// const UseStateBasics = () => {
//   const [text,setText] = useState('Random Text');
//   const handleClick = () =>{
//     if( text === "Random Text"){
//       setText("Another Title")
//     }else{
//       setText("Random Text")
//     }
//   }
//   return (
//     <React.Fragment>
//       <h2>{text}</h2>
//       <button className='btn' onClick={handleClick}>Change Title</button>
//     </React.Fragment>
//   )
// };

// export default UseStateBasics;

import React, { useState } from 'react';

function State() {
  const [text, allText] = useState("Hello People");
  const click = ()=>{

    if (text === "Hello People") {
      allText("What up");
    } else {
      allText("Hello People")
    }
  }
  return (
    <div>
      <h1>{text}</h1>
      <button className='btn' onClick={click}>Change</button>
    </div>
  )
}

export default State