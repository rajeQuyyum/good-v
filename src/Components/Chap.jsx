import React, { useEffect, useState } from 'react'
import { FaRocketchat, FaYoutubeSquare } from 'react-icons/fa'
import Chatlist from './Chatlist'
import InputText from './InputText'
import UserLogin from './UserLogin'
import socketIOClient from 'socket.io-client'

const Chap = () => {
    const [user, setUser] = useState(localStorage.getItem('user'))
    const socketio = socketIOClient('http://localhost:3001')
    const [chats, setChats] = useState([])


    useEffect(() => {
        socketio.on('chat', (chats) => {
            setChats(chats)

        });
    });
    
    const sendToSocket = (chat) => {
      socketio.emit('chat', chat)
    }

    const addMessage = (chat) => {
        const newChat = {...chat, user: localStorage.getItem('user'), avatar: localStorage.getItem('avatar'),

        };
        setChats([...chats, newChat])
        sendToSocket([...chats, newChat])


      
    };

    const Logout  = () => {
        localStorage.removeItem("user")
        localStorage.removeItem('avatar')
        setUser('')
    }


  return (
   <div className='py-10 px-10'>
    {user ? (
    <div>
        
        <div className='flex justify-between'>
            <h1>usernam:{user}</h1>
            <p><FaRocketchat className='text-red-500 text-3xl' />Chat Support</p>
            <p onClick={Logout}>
                <strong className='text-green-400'>Logout</strong>
            </p>
        </div>
        <Chatlist chats= {chats}/>
        <InputText addMessage = {addMessage}/>
    </div>
        ):
        <UserLogin setUser = {setUser}/>
    }
   </div>
  )
}

export default Chap