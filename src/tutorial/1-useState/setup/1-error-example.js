import React from 'react';

// const ErrorExample = () => {
//   let title = "Some Random Title"

//   const handleClick = () =>{
//     title = "Another Title"
//     console.log(title)
//   }

//   return (
//     <React.Fragment>
//       <h2>{title}</h2>
//       <button type='submit' className='btn' onClick={handleClick}>Click ME</button>
//     </React.Fragment>
//   );
// };

// export default ErrorExample;


function Setup() {
  let tittle = 'My first React Code';
  const clickMe = ()=>{
    tittle = "Hello World";
  }
  return (
    <div>
      <h2>{tittle}</h2>
      <button className='btn' onClick={clickMe}>Change my tittle</button>
    </div>
  )
}

export default Setup