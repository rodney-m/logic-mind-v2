import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route to='/' exact component={Home} />
          <Route to='/about' exact component={About} />
          <Route to='/contact' exact component={Contact} />
          <Route to='/services' exact component={Services} />
      </Switch>
      </Router>
    </>
  )
}



export default App
