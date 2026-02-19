import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='h-20 sticky flex flex-wrap justify-center inset-x-0 border-2 top-0 bg-white'>
      <div className='px-4 py-4 flex gap-4'>
        <div className='mr-25'>
            <img className='h-13 w-60' src={logo}/>
        </div>
        <div className='flex flex-wrap gap-10 justify-center p-3'>
            <Link to='./'><button>HOME</button></Link>
            <Link to='./about'><button>ABOUT</button></Link>
            <Link to='./contact'><button>CONTACT</button></Link>
            <Link to='./github'><button>GITHUB</button></Link>
        </div>
        <div className='flex flex-wrap gap-4 justify-center ml-50' >
        <Link to='./login'><button className='p-3'>Log in</button></Link>
        <Link to='./'><button className=' text-white flex p-3 text-center bg-red-500 rounded-xl '>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar