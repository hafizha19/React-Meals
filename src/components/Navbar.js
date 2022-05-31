import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div>
        <div>
            <ul>
                <li>
                    <Link to='/' className='a'>Home</Link>
                </li>
                <li>
                    <Link to='category' className='a'>Category</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar