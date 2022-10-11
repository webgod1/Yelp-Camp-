import React, {useEffect} from 'react'
import '../css/index.css'

function Modal({modalContent, close}) {
    
    useEffect(()=>{
        setTimeout(close, 2000)
    })
    return(
        <p className='moda' style={{color: 'red', marginLeft: '135px', marginTop: '12px'}}>{modalContent}</p>
    )
}

export default Modal;