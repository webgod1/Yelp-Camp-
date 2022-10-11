import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      closeModal()
    },3000)
  })
  return <div className='modal'>
    <h3>{modalContent}</h3>
  </div>;
};

export default Modal;
