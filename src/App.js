import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/services'  element={<Services />} />
      </Routes>



    
    </>
  )
}



export default App
