import React, { useEffect, useRef } from "react";
import Message from "./Message";

export default function MessageList({ messages, currentUser }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
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
    )
}


