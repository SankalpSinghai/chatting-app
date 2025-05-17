import React, { useState } from 'react'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow';
import { conversations } from './data/conversations';
import { messages } from './data/messages';
import './App.css'
import { getRandomChatSentence } from './utils';

const myUserID = 'user123';

function App() {
  const [activeConversation, setActiveConversation] = useState('user456');
  const [messageByConversation, setMessageByConversation] = useState(messages);
  const [myMsg, setMsg] = useState('');
  
  const handleClick = (userID) => {
    setActiveConversation(userID);
  }
  const handleChange = (e) => {
    setMsg(e.target.value);
  }

  const onMsgSent = () => {
    const currentUserConversation = messageByConversation[activeConversation];
    const newMsg = {
      id: `msg${currentUserConversation.length + 1}`,
      text: myMsg,
      timeStamp: new Date().toISOString(),
      senderId: myUserID,
      status: 'delivered',
    }
    setMessageByConversation((prev) => ({
      ...prev,
      [activeConversation]: [
        ...prev[activeConversation],
        newMsg,
      ]
    }))
    setMsg('');
    setMessageByConversation((prev) => ({
      ...prev,
      [activeConversation]: [
        ...prev[activeConversation],
        {
          isTyping: true,
          senderId: activeConversation,
        },
      ]
    }))
    setTimeout(() => {
      setMessageByConversation((prev) => {
        const activeUserMsgs = prev[activeConversation];
        const newMsg = {
          id: `msg${activeUserMsgs.length}`,
          text: getRandomChatSentence(),
          timeStamp: new Date().toISOString(),
          senderId: activeConversation,
          status: 'delivered',
          isTyping: false,
        }
        if(activeUserMsgs[activeUserMsgs.length - 1].isTyping){
          activeUserMsgs?.pop();
        }
        return ({
          ...prev,
          [activeConversation]: [
            ...prev[activeConversation],
            newMsg,
          ]
        })
      })

    }, 500);
  }


  return (
    <div className='flex h-screen bg-gray-100'>
      <ChatList conversations={conversations} activeConversation={activeConversation} onClick={handleClick} />
      <ChatWindow messages={messageByConversation[activeConversation]} currentUser={activeConversation} onChange={handleChange} myMsg={myMsg} onMsgSent={onMsgSent}  />
    </div>
  )
}

export default App
