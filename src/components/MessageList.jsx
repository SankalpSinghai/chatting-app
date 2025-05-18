import React, { useEffect, useRef } from "react";
import { Image } from "lucide-react";
import Message from "./Message";
import { users } from "../data/users";


export default function MessageList({ messages, currentUser }) {
    const bottomRef = useRef(null);
    const userName = users[currentUser]?.name;
    useEffect(() => {
        bottomRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <>
            <div className="flex justify-start items-center bg-gray-400 p-2">
                <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center ml-2 mr-2"><Image /></span>
                {userName}
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">

                {messages.map((message) => (
                    <Message
                        key={message?.id}
                        isMine={currentUser === message?.senderId}
                        message={message}
                    />
                ))}
                <div ref={bottomRef}></div>
            </div>
        </>
    )
}


