import React from 'react'
import Logo from '../img/Logo.svg'
import {Link } from 'react-router-dom'

function Comment() {
    const [comment, setComment] = React.useState('')
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
            <div className='body' style={{marginTop: '92px'}}>
                <h2>Add New Comment</h2>
                <label htmlFor="comment">Description</label>
                <br />
                <textarea id="comment" cols="30" rows="10"  value={comment} onChange={(e)=>setComment(e.target.value)}/>
                <br />
                <Link><button>Post Commemt</button></Link>
            </div>
            <br />
          <img className='downLogo' src={Logo} alt="" />
        </div>

    )
}

export default Comment;