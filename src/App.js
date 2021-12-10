import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
          <Route to='/' component={Home} />
      </Switch>
    </>
  )
}



export default App
