import React from 'react'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/globe.png'
import earth from '../../assets/earth.png'
import './LeftSidebar.css'
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className='side-nav'>
        <NavLink to='/Home' className='side-nav-links' exact activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div><p>Public</p></div>
          <NavLink to='Question' className='side-nav-links' activeClassName="active" >
            <img   src={earth} width="13px" height="13px" alt="globe"/>
            <p id='que'>Question</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClassName="active"  style={{paddingLeft: "40px"}}>
                 <p>Tags</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClassName="active" style={{paddingLeft: "40px"}}>
                 <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar