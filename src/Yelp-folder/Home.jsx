import React from 'react';
import Logo from '../Yelp-folder/img/Logo.svg'
import Check from '../Yelp-folder/img/Checkmark.svg'
import Hero from '../Yelp-folder/img/Hero Image.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Plum from '../Yelp-folder/img/Plug.svg'
import Book from '../Yelp-folder/img/Booking.svg' 
import Air from '../Yelp-folder/img/Airbnb.svg'

function Home() {
    return(
      <article>
        <div className='home'>
            <img src={Logo} alt='My Logo' />
            <br />
            <div style={{marginTop: '52px'}}>

            <span>Explore the best</span>
            <br />
            <span>camps on Earth</span>
            <br />
<br />
            <span style={{fontSize: '17px', color: 'grey', }}>YelpCamp is a curated list of the best camping spot on</span>
            <br />
            <span style={{fontSize: '17px', color: 'grey', marginBottom:'10px'}}>Earth. Unfilitered and unbiased reviews</span>
            <br />
            <img  style={{marginTop: '3px'}} src={Check} alt="" />
            <span  style={{marginTop: '3px', fontSize: '17px', color: 'grey'}}>Add your own camp suggestion</span>
            <br />
            <img  style={{marginTop: '3px'}} src={Check} alt="" />
            <span style={{marginTop: '3px', fontSize: '17px', color: 'grey'}}>Leave review and experience</span>
            <br />
            <img  style={{marginTop: '3px'}} src={Check} alt="" />
            <span style={{fontSize: '17px', color: 'grey'}}>See location for all camps</span>
            <br />
            <br />
            <Link to='/campground'><button>View camp ground</button></Link>
        </div>
    </div>

    <div className='hero'>
        <img src={Hero} alt="" />
    </div>

    <div className='partners'>
        {/* partners */}
        <br />
        <p>Partnered with:</p>
        <br />
            <img src={Air} alt="" />
            <img src={Book} alt="" />
            <img src={Plum}/>
    </div>
      </article>
    )
}

export default Home