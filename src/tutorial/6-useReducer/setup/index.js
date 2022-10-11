import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer=(state,action)=>{
  if(action.type === 'ADD_ITEM'){
    const newItem = [...state.people,action.payload]
    // console.log(state)
    return {...state,people:newItem,isModalOpen:true,modalContent:"Item Added"}
  }
  if(action.type ==="NO_ITEM"){
    return{...state,isModalOpen:true,modalContent:"Add an Item"}
  }
  if(action.type === "CLOSE_MODAL"){
    return {...state,isModalOpen:false}
  }
  if(action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter((person)=>
      person.id !== action.payload
  )
    return {...state,people:newPeople,isModalOpen:true,modalContent:"Item Removed"}
  }
  // console.log(state,action);
  return state
}

const defaultState = {
   people:[],
   isModalOpen:false,
   modalContent:''
}

const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(name){
      const newItem = {id:new Date().getDate().toString(),name}
      dispatch({type:"ADD_ITEM",payload:newItem})
      setName('')
    }else{
      dispatch({type:"NO_ITEM"})
    }
  }

  const closeModal =()=>{
    dispatch({type:"CLOSE_MODAL"})
  }

  const handleRemove = (id)=>{
    dispatch({type:"REMOVE_ITEM",payload:id})
  }
  
  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    {/* Form for input */}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button type='submit' className='btn'>Add Person</button>
      </div>
    </form>

    {
      state.people.map((person)=>{
        const {id,name} = person
        return(
          <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={()=>handleRemove(id)}>remove</button>
          </div>
        )
      })
    }
    </>
  )
};

export default Index;
