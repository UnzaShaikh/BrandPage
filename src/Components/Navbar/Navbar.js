import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    
    <div id="Navbar">
    <div className="logo">
      <img src="./brand_logo.png" alt="logo" />
    </div>
    <ul className='list'>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button className='btn'>Login</button>
    </div>
      
  
  )
}

export default Navbar

