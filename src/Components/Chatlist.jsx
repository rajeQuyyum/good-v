import React from 'react'

const Chatlist = ({chats}) => {
    const user = localStorage.getItem('user')
    function SenderChat ({message, username, avatar}){
        return (
            <div className=' md:w-[150px] w-full '>
                <img className='rounded-full w-10 h-10' src={avatar} alt="" />
             
                 <div className='w-[900px]'>
                     <p className='flex gap-3 flex-col pt-5  ml-3 pl-5 px-3 bg-blue-500 rounded-lg'>
                    <strong>{username}</strong>
                    {message}
                </p>
             
                 </div>
            </div>
        )
    }

     function RecieverChat ({message, username, avatar}) {
        return (
            <div className='mb-10'>
                <img className='rounded-full w-10 h-10' src={avatar} alt="" />
                <p className='flex flex-col gap-3 pl-10 bg-green-500 w-[900px]  rounded-lg'>
                    <strong>{username}</strong>
                    {message}
                </p>
            </div>
        )
    }
  return (
    <div className='chats_list'>
        {
            chats.map((chat, index) => {
               if(chat.user == user) {
                 return <SenderChat
                 key={index}
                 message = {chat.message}
                 username = {chat.user}
                 avatar = {chat.avatar}/>
               }
                return <RecieverChat
                 key={index}
                 message = {chat.message}
                 username = {chat.user}
                 avatar = {chat.avatar}/>
            })
        }
    
        <RecieverChat />
    </div>
  )
}

export default Chatlist