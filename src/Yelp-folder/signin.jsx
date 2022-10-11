
import React, {useState, useReducer} from 'react'
import Image from './img/Logo.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Campground from './campground';
import Modal from './code/modal';
import Person from '../Yelp-folder/img/User Testimonial.svg'
// import '../Yelp-folder/css/index.css'


function Signin() {
    // my reducer function
    const reducer = (state, action)=>{
        if (action.type == 'EMPTY') {
            return(
                {
                    ...state,
                    isModal: true,
                    modalContent: 'Please Username and Password are required'
                }
            )
        }
        if (action.type == 'CLOSE') {
            return(
                {
                    ...state,
                    isModal: false
                }
            )
        }
        return state
    }
    const defaultState = {
        isModal: false,
        modalContent: ''
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    // my button function

    const submit = (e)=>{
        e.preventDefault();
        if (username == '' || password == '') {
            dispatch({type: 'EMPTY' })
        }
        else{}
    }
    const close = ()=>{
        dispatch({type: 'CLOSE'})
    }
    return(
        <div className='form-wrapper'>
            <header>
            <img src={Image} alt="logo" />
            <ul>
                <li>
            <Link to='/campground' style={{marginLeft: '-798px'}}>Back to campground</Link>
                </li>
            </ul>
            </header>
            <div className='text-wrapper'>
            <span style={{fontSize: '2.5em', fontWeight: 'bold'}}>Start exploring camps from all</span>
            <br />
                <span style={{fontSize: '2.5em', fontWeight: 'bold'}}> around the world.</span>
            </div>
            {state.isModal && <Modal close={close} modalContent={state.modalContent}/>}
            {/* my form */}
            <form>
                <div>
                <label htmlFor="username">Username</label>
                <br />
                <input id='username' type='text' placeholder='johndoe_91' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div style={{marginTop: '15px'}}>
                <label htmlFor="password">Password</label>
                <br />
                <input id='password' type='password' placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                {/* my button */}
                <Link to='/campground' className='big-btn'><button onClick={submit} className='big-btn'>Create my account</button></Link>
            </form>
            <br />
            <span style={{marginLeft: '135px', marginTop: '-10px'}}>Already a user? </span><Link style={{textDecoration: 'underline'}} to='/'> Login</Link>
               
                <div className='main'>
                    <div className='childrens'>
                        {/* user testimony */}
                        <p>"Yelp camp has honestly saved ne hours of research time, and the camp on here are 
                            difinitely well picked and added."
                        </p>
                        <img src={Person} alt="user testimony" />
                         <span>May Andrews</span>
                         <br />
                         <span className='pro'>Professional Hiker</span>

                    </div>
                </div>
        </div>
    )
}

export default Signin;