import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("Default User")

  useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((user)=>{
      const {login} = user
      setLoading(false)
      setUser(login)
    })
    .catch((error)=>setIsError(true))
  },[])


  if(isError){
    return <h2>OOps!! an Error has Occured</h2>
  }

  if (loading){
    return <h2>Loading......</h2>
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
