import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import ManagedICTServices from './pages/Services/managed-ict-services';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/services/managed-ict-services'  element={<ManagedICTServices />} />
          <Route path='/services/technology-solutions'  element={<Services />} />
          <Route path='/services/cloud-solutions'  element={<Services />} />
          <Route path='/services/telecom-solutions'  element={<Services />} />
      </Routes>
      <Footer/>


    
    </>
  )
}



export default App
