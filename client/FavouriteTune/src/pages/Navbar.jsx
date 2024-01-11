import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    
    <div className='navbar'>

        <Link to="/info">Info</Link> 
        <Link to="/add">Add to DB</Link> 
        
    </div>
  )
}

export default Navbar