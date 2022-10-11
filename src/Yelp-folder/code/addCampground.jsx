import React, {useState, useReducer} from 'react'
import { Link } from "react-router-dom";
import Logo from '../Yelp-folder/img/Logo.svg'
import Modal from './modal'

function AddCamp() {
    const reducer =(state, action)=>{
        if (action.type =='ERROR') {
            return({
                ...state,
                isModal: true,
                modalContent: 'Please Fill in all the required details'
            })
        }

        if (action.type =='CLOSE') {
            return({
                ...state,
                isModal: false,
                modalContent: ''
            })
        }
 }
    const defaultState = {
        isModal: false,
        modalContent: ''
    }
    const [state, dispatch] = useReducer(reducer, defaultState)
    const [campgroundName, setCampgroundName] = useState('')
    const [campgroundPrice, setCampgroundPrice] = useState('')
    const [campgroundImage, setCampgroundImage] = useState('')
    const [campgroundDescription, setCampgroundDescription] = useState('');

    const submit= ()=>{
        if (campgroundName == '' || campgroundPrice=='' || campgroundImage == '' || campgroundDescription == '') {
            dispatch({type: 'ERROR'})
        }
    }

    const close = ()=>{
        dispatch({type: "CLOSE"})
    }
    return(
        <div>
            <header className='header'>
                <img src={Logo} alt="" />
                <Link style={{position: 'absolute', marginLeft: '303px'}} to='/campground'>Home</Link>
                <ul>
                    <li>John doe</li>
                    <li style={{marginLeft: '40px'}}><Link to='/' >Logout</Link></li>
                </ul>
            </header>
            <form>
                {state.isModal && <Modal close={close} modalContent={state.modalContent}/>}
            <div className='body'>
                <h2>Add New Campground</h2>
            <label htmlFor="name">Campground Name</label>
            <br />
            <input type='text' id='name' value={campgroundName} onChange={(e)=> setCampgroundName(e.target.value)} placeholder='Seven sisters water fall'/>          
            <br />
            <label style={{marginLeft: '-380px'}} htmlFor="name">Price</label>
            <br />
            <input type='text' id='name' value={campgroundPrice} onChange={(e)=> setCampgroundPrice(e.target.value)} placeholder='195$'/>          
            <br />
            <label style={{marginLeft: '-380px'}} htmlFor="name">Image</label>
            <br />
            <input type='text' id='name' value={campgroundImage} onChange={(e)=> setCampgroundImage(e.target.value)} placeholder='C:\Users\USER 2\Documents\React folder\Yelp camp with react\src\Yelp-folder\img\Hero Image (Tablet and Mobile).jpg'/>          
                <br />
            <label style={{marginLeft: '-360px'}} htmlFor='description'>Description</label>
             <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='lorem this place is really hot hiwashdashadsasgucivbhasugweisidhvdsiugiasd
            ugdsjhssdhgdhhhoejwSDALKNhuoiwhealshuohjilknweasdluojknlewaDSUHOjilnkesdo;jklnme,.sDXcoijkndshohujk'></textarea>     
            <br />
           <Link to='/campground'><button onClick={submit}>Add Campground</button>  </Link>     
            </div>
            <br />
            </form>
            <img src={Logo} style={{marginLeft: '125px'}}/>
        </div>
    )
}

export default AddCamp;