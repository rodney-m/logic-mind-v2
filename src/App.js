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
import TechnologySolutions from './pages/Services/technology-solutions'
import ManagedICTServices from './pages/Services/managed-ict-services';
import CloudSolutions from './pages/Services/cloud-solutions';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/services/managed-ict-services'  element={<ManagedICTServices />} />
          <Route path='/services/technology-solutions'  element={<TechnologySolutions />} />
          <Route path='/services/cloud-solutions'  element={<CloudSolutions />} />
          <Route path='/services/telecom-solutions'  element={<TechnologySolutions />} />
      </Routes>
      <Footer/>


    
    </>
  )
}



export default App
