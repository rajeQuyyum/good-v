import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'

const InputText = ({addMessage}) => {
    const [message, setMessage] = useState()
    const sendMessage = () => {
        addMessage({message})
        setMessage("")
    
    }
  return (
    <div className='flex gap-14 justify-center bg-white md:w-[500px] w-full m-auto rounded-md border border-black'>
        <textarea className='md:w-[800px] w-full h-10  py-2  px-2  resize-none outline-none' placeholder='type' name="message" id="message" rows="" onChange={(e) => setMessage(e.target.value)} ></textarea>
        <IoIosSend className='text-green-700 text-5xl' onClick={sendMessage} />
    </div>
  )
}

export default InputText