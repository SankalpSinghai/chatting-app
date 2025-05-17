import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageInput from './components/MessageInput'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'


function App() {
  

  return (
    <div className='flex h-screen bg-gray-100'>
      <ChatList />
      <ChatWindow />
    </div>
  )
}

export default App
