import React, { useState }  from 'react'
import Chap from './Chap'
import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'


export default function Sup() {
    const [display, setDisplay] = useState(true)
  return (
    
   <div className='pt-50 mb-10 w-[1000px] ml-52'>
    <div className={`bg-amber-200 border-red-500 ${display ? 'bg-gray-900' : 'bg-white'} ${display ? 'text-gray-300' : 'text-black'}`}>
        <div>
            <i className={`text-2xl  ${display ? 'block ' : 'hidden'}`} onClick={() => setDisplay(false)}><MdDarkMode /></i>
            <i className={`text-2xl  ${display ? 'hidden ' : 'block'}`} onClick={() => setDisplay(true)}><CiLight /></i>
        </div>
      <Chap />
    </div>
   </div>
    
  )
}
