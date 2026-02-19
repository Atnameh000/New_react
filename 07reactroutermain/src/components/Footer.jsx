import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='fixed flex flex-wrap inset-x-0 bottom-0 justify-center border-2'>
      <div className='flex flex-wrap px-3 py-5'>
        <div className=''>
           <img className='h-30 w-100' src={logo}/>
        </div>
        <div className='ml-50'>
          <div className='flex gap-20 justify-center p-5'>
           <Link><button>RESOURCES</button></Link>
           <Link><button>FOLLOW US</button></Link>
           <Link><button>LEGAL</button></Link>
          </div>
          <div className='fixed flex gap-20 justify-center p-5 pb-0'>
            <Link><button >Home</button></Link>
            <Link><button className='ml-13'>Github</button></Link>
            <Link><button className='ml-10'>Privacy policy</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer