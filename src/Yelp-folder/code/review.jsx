import React from 'react';
import Logo from '../img/Logo.svg'
import {Link} from 'react-router-dom'

import Map from '../img/Map.png'
import Mount from '../img/Camp Images/High Quality Images/River.jpg'

function Review() {
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
            <div className='map'>
                <img src={Map} alt="" />
            </div>
            <div className='mountUlap'>
                <img src={Mount} alt="" />
                <br />
                <span style={{marginLeft: '30px',fontWeight: 'bold'}}>MountUlap</span>
                <span style={{marginLeft: '210px', marginTop:'2px', fontWeight: 'bold' }}>$104.99</span>
                <br />
                <span className='mount'>Mount ulap is 7.7 kilometers moderately </span>
                <br />
                 <span style={{marginLeft: '30px', fontSize: '13px'}}>qui harum maxime, magni neque repellendus praesentium</span>
                 <br />
                  <span style={{marginLeft: '30px', fontSize: '13px'}}>incidunt cupiditate ullam provident tenetur soluta. Ut</span>
                  <br />
                  <span style={{marginLeft: '30px', fontSize: '13px'}}> dignissimos recusandae voluptates totam suscipit.</span>
            </div>
                <Link to='/comment'><button className='my-btn'>Leave a Review</button></Link>
        </div>
    )
}

export default Review;
