import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import _ from 'lodash'
import { IoIosSend, IoIosTransgender } from 'react-icons/io'

const UserLogin = ({setUser}) => {
    const [userName, setUserName] = useState()
    const handleUser = () =>{
        if(!userName) return;
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    }
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <div className='flex items-center mb-4'>
           <FaReact className='text-blue-400' /> 
           <h1 className='text-2xl'>Support</h1>
        </div>

        <div className='flex flex-col items-center gap-2.5'>
            <input className='border border-green-700 rounded-lg pl-2 py-2' type="text" placeholder='Enter your name'
            onChange={(e) => setUserName(e.target.value)} />
            <button className='bg-green-800 text-white rounded-lg w-[100px] py-2'onClick={handleUser}>Login</button>
        
        </div>
    </div>
  )
}

export default UserLogin
