import React from 'react';
import {Link} from 'react-router-dom'
import Image from '../img/Logo.svg';
import Search from '../img/Search-icon.svg'
import FirstImage from '../img/Camp Images/High Quality Images/mount.png'
import SecondImage from '../img/Camp Images/High Quality Images/River.jpg'
import ThirdImage from '../img/Camp Images/High Quality Images/islands.jpg'
import FourthImage from '../img/Camp Images/High Quality Images/seven.jpg'
import FifthImage from '../img/Camp Images/High Quality Images/Springs.jpg'
import Last from '../img/Camp Images/High Quality Images/desert.jpg'


function NotLoggin() {
    const [search, setSearch] = React.useState('');
    return(
        <>
        <div className="navBar">
            {/* my header, my navBar */}
            <img src={Image} alt="Logo" />
            <Link to='' className='links' style={{marginLeft: '22px'}}>Home</Link>
            <ul>
                <li>John doe</li>
                <li className='link' style={{marginLeft: '22px'}}><Link to='/' className='btn'>Create an account</Link></li>
            </ul>
        </div>
        <article className='containers'>
            <div style={{marginLeft: '54px'}} className='babies'>
                <span className='p'>Welcome to YelpCamp!</span>
                <br/>
                <span className='view'>View our hand-picked campground from all over</span>
                <br />
                <span>the world or add your own</span>
                <br />
                {/* my search bar */}
                <img src={Search} alt="search-icon" className='search'/>
                <input type="search" name="search" id="search" value={search} onChange={(e)=> setSearch(e.target.value)} />
                <button>Search</button>
                <br />
                <Link to='/addcamp' style={{background: 'rgb(236, 236, 241)'}}><span style={{textDecoration: 'underline', fontSize: '12px', color: 'grey'}}>or add your own campground</span></Link>
            </div>
        </article>
        {/* campground images */}
        <div className="my-images">
            <div  className='border'>
            <img src='' alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border'>
            <img src={FifthImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border2'>
            <img src={FourthImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border3'>
            <img src={Last} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

            {/* second one */}

            <div  className='border'>
            <img src={SecondImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border4'>
            <img src={FirstImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border5'>
            <img src={ThirdImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>

             <div  className='border6'>
            <img src={FifthImage} alt="" />
            <p>Mount Ulap</p>
            <span>One of the famous hikes in</span>
            <br />
            <span>Benguest is Mt ulap in togon</span>
            <button>View Campground</button>
            </div>
        </div>
        <br />
          <img style={{marginTop: '221px', marginLeft: "220px"}} src={Image} alt="Logo" />
        </>
    )
}

export default NotLoggin;