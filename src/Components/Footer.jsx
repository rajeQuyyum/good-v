import React from 'react'
import { BsCoin } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <header className=' bg-[#252424bb] text-gray-400 py-8'>
        <ul className='flex justify-between px-60 '>
            <li><NavLink to="/"> 
                <div className='flex flex-col items-center'>
                    <IoMdHome className='text-green-500 text-2xl' />
            <h1>Home</h1>
                </div>
            </NavLink>
            </li>
       <li><NavLink to="accounts">
        <div className='flex flex-col items-center'>
            <MdOutlineAccountBalanceWallet />
            <h1>Accounts</h1>
        </div>
        </NavLink>
        </li>
        <li><NavLink to="invest">
            <div className='flex items-center flex-col'>
                <BsCoin />
            <h1>Invest</h1>
            </div>
            </NavLink>
            </li>
       <li><NavLink to="cards">
       <div className='items-center flex flex-col'>
         <FaRegAddressCard />
            <h1>Cards</h1>
       </div>
            </NavLink>
            </li>


            <NavLink className='bg-green-600 py-2 px-2 rounded-full text-white' to="chat">chat</NavLink>

        


        </ul>
    </header>
  )
}
