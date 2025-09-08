import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoGiftOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='flex justify-between bg-[#252424bb] w-[1000px] items-center px-5 py-2 fixed  ml-52'>
    <div className='flex items-center gap-3'>
       <div>
         <img className='h-10 w-10 rounded-3xl' src="https://media.glamourmagazine.co.uk/photos/6502fc982c0cce937fffce98/16:9/w_1920,h_1080,c_limit/ASHANTI%20NELLY%20140923%20default-GettyImages-1448859903.jpg" alt="" />
       </div>
        <div>
            <h1 className='text-sm font-sans text-gray-600'>Welcome back!</h1>
             <h2 className='text-white text-lg font-sans'>John Tom</h2>
        </div>
    </div>

    <div className='flex gap-3 text-white text-2xl'>
        <IoIosNotificationsOutline />
       <NavLink to="/noti">
         <IoGiftOutline />
       </NavLink>
    </div>
   </nav>
  )
}
