import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Error() {
    return(
        <div className='container'>
            <h1>Error Page</h1>
            <Link to='/campground' className='btn'>Go back to campground</Link>
        </div>
    )
}

export default Error