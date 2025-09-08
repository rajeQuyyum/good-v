import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hom from './Pages/Hom'
import Accounts from './Pages/Accounts'
import Invest from './Pages/Invest'
import Cards from './Pages/Cards'
import Transfer from './Pages/Transfer'
import Wallet from './Pages/Wallet'
import Card from './Pages/Card'
import Global from './Banks/Global'
import Tech from './Banks/Tech'
import Acb from './Banks/Acb'
import Citi from './Banks/Citi'
import Star from './Banks/Star'
import Chase from './Banks/Chase'
import Vin from './Banks/Vin'
import Notification from './Pages/Notification'
import Sup from './Components/Sup'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Hom />} />
     <Route path='accounts' element={<Accounts />} />
     <Route path='invest' element={<Invest />} />
     <Route path='cards' element={<Cards />} />
     <Route path='transfer' element={<Transfer />} />
     <Route path='wallet' element={<Wallet />} />
     <Route path='card' element={<Card />} />
     <Route path='glo' element={<Global />} />
     <Route path='tech' element={<Tech />} />
     <Route path='acb' element={<Acb />} />
     <Route path='citi' element={<Citi />} />
     <Route path='star' element={<Star />} />
     <Route path='chhase' element={<Chase />} />
     <Route path='vin' element={<Vin />} />
     <Route path='noti' element={<Notification />} />
     <Route path='chat' element={<Sup />} />
     
   
    
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
