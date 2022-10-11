import React,{useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // set the value to preserve
  const [value, setValue] = useState(data);

  // fucntion that removes the item
  const removeItem = (id)=>{
    // filters out the one that does not match the input id
    let newPeople = value.filter((person)=>person.id !== id)
    // set the new values left to the value array
    setValue(newPeople)
  }

  return ( <>
    {
      value.map((person)=>{
        const {id, name} = person        
        return <div key={id} className='item'> 
          <h3>{name}</h3>
          <button onClick={()=> removeItem(id)}>Remove</button>
        </div>
      })
    }
    <button className='btn' onClick={()=>setValue(()=>[])}>Clear All</button>
  </> )
};

export default UseStateArray;
