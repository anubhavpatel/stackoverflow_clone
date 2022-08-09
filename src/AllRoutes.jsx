import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import About from './components/About'
import Products from './components/Products'
import ForTeams from './components/ForTeams'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestion' element={<AskQuestion/>}/>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/ForTeams' element={<ForTeams/>}/>
    </Routes>
  )
}

export default AllRoutes