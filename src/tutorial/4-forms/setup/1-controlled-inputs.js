import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people, setPeople] = useState([])
  const [isError,setIsError] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (email && firstName){
      const person = {firstName,email}
      setPeople((people)=>{
        return [...people,person]
      })
      setEmail('')
      setFirstName('')
      console.log(people)
    }else{
      setIsError(()=>true)
      setTimeout(()=>{
        setIsError(false)
      },3000)
    }
  }


  return (
    <>
    {isError && <h3>Empty Value!!!</h3>}
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Firstname : </label>
          <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="email" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button className='btn' type='submit'>Add Person</button>
      </form>


    {
      people.map((single,index)=>{
        const {firstName,email} = single
        return <div key={index}>
          <h3>{firstName}</h3>
          <p>{email}</p>
        </div>
      })
    }

    </article>

    </>
  )
  
};

export default ControlledInputs;
