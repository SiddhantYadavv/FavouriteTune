import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Songs from './pages/Songs.jsx'
import Navbar from './pages/Navbar.jsx'
import Form from './pages/Form.jsx'
import Intro from './pages/Intro.jsx'

const App = () => {
  return (
    <Router>
      <div className='navbar'>
      <Navbar />
      </div>

        <div className='content' >
      <Routes>
        <Route path='/' className="content" element={<Intro/>}/> 
        <Route path='/info' className="content" element={<Songs/>}/> 
        <Route path='/add' className="content" element={<Form/>}/> 
        </Routes>
        </div>

    </Router>
  )
}

export default App