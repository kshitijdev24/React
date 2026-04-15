import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-cyan-500 flex justify-between items-center p-4 text-white'>
      <h1>Kshitij</h1>
      <div className='flex  justify-between gap-3 text-lg'>
        <Link to='/'>Home</Link>
<Link to='/about'>AboutUs</Link>
<Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar