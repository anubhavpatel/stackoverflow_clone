import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Stack from '../assets/stack.png'
import Search from '../assets/search.svg'
import Avatar from './Avatar/Avatar'
import About from './About'

import './Navbar.css'
const Navbar = () => {
  var User = null
  return (
    <nav className='min-nav'>
      <div className='navbar'>
                 <Link to='/Home' className='nav-item nav-logo'>
                  <img src={Stack} alt='stack' height={45} />
                 </Link>
                 <Link to='/About' className='nav-item nav-btn'>About</Link>
                 <Link to='/Products' className='nav-item nav-btn'>Products</Link>
                 <Link to='/forTeams' className='nav-item nav-btn'>For Teams</Link>
                 <form>
                  <input type="text" placeholder='search...'/>
                  <img src={Search} alt='search' height={16} className='search-icon' />
                 </form>
                 { User === null?
                <Link to ='/Auth' className='nav-item nav-links'>Log in</Link>:
                <>
                <Link to='/User' style={{textDecoration:'none'}} ><Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>M</Avatar></Link>
                <button className='nav-items nav-links'>Log out</button>
                </>
                }
      </div>
    </nav>
  )
} 

export default Navbar