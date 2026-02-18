import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-16 bg-gray-800 text-white flex items-center justify-center gap-6'>
      <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
      <Link to="/about" className='text-white hover:text-gray-300'>About</Link>
      <Link to="/login" className='text-white hover:text-gray-300'>Login</Link>
    </nav>
  )
}

export default Navbar
