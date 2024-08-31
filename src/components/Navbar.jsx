import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import Signup from '../pages/Signup'
function Navbar() {
  return (
    
    <nav className='nav absolute text-center flex flex-wrap items-center justify-between gap-96 lg:gap-40 md:gap-8 sm:gap-4 xl:gap-64'>
        <Link to='/'> <img src={logo} alt="logo" className='h-20 cursor-pointer'/></Link>
        <ul className='md:flex flex-wrap sm:gap-4 flex-row hidden'>
            <li className='text-white hover:text-orange-500'><Link to='/'>Home</Link></li>
            <li className='text-white hover:text-orange-500'><Link to='/services'>Services</Link></li>
            <li className='text-white hover:text-orange-500'><Link to='/pricing'>Pricing</Link></li>
            <li className='text-white hover:text-orange-500'><Link to='/about'>About Us</Link></li>
            <li className='text-white hover:text-orange-500'><Link to='/contact'>Contact Us</Link></li>
           
        </ul>
        <button className=' sm:text-white sm:border sm:rounded-full sm:px-4 sm:py-2 hover:bg-white hover:text-black' onClick={Signup}>Sign Up</button>
        
    </nav>
   
  )
}

export default Navbar