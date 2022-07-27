import React from 'react'
import pen from '../../assets/pen.png'
import comm from '../../assets/comment.png'
import logo from '../../assets/logo.png'
const Widget = () => {
  return (
    <div className='widget'><h4>The overflow blog</h4>
    <div className='right-sidebar-div-1'>
        <img src={pen} alt="pen" width='14'/>
        <p>Design patterns for asynchronous API communication</p>
    </div> 
    <div className='right-sidebar-div-1'>
        <img src={pen} alt="pen" width='14'/>
        <p>Game Boy emulators, PowerPoint developers, and the enduring appeal of Pokémon...</p>
    </div> 
    <h4>Features of Meta</h4>
    
    <div className='right-sidebar-div-1'>
        <img src={comm} alt="pen" width='15'/>
        <p>Design patterns for asynchronous API communication</p>
    </div>
    <div className='right-sidebar-div-1'>
        <img src={logo} alt="pen" width='15'/>
        <p>Game Boy emulators, PowerPoint developers, and the enduring appeal of Pokémon...</p>
    </div> 
    <h4>Hot meta posts</h4>
    <div className='right-sidebar-div-1'>
        <p>38</p>
        <p>Design patterns for asynchronous API communication</p>
    </div> 
    <div className='right-sidebar-div-1'>
    <p >22</p>
        <p>Game Boy emulators, PowerPoint developers, and the enduring appeal of Pokémon...</p>
    </div> 
    <div className='right-sidebar-div-1'>
    <p >10</p>
        <p>Game Boy emulators, PowerPoint developers, and the enduring appeal of Pokémon...</p>
    </div> 
      </div>
  )
}

export default Widget