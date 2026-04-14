import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:'black', color:'white', justifyItems:'space-between', padding:'10px'}}>
          <h1>kshitj</h1>
          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', gap:'20px'}}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/contact'>Contact</Link>
          </div>
    </div>
  )
}

export default Navbar