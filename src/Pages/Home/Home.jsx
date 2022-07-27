import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Widget from '../../components/RightSidebar/Widget'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar/> 
      <div className='home-container-2'>
      <RightSidebar/>
     </div>
    </div>
  )
}

export default Home
