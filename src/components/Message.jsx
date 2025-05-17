import React from "react";
import { Check, CheckCheck } from "lucide-react";
import { formatTime } from "../utils";
import TypingIndicator from "./TypingIndicator";
import { users } from "../data/users";

export default function Message({ message, isMine }) {
    const {
        id = "msg1",
        text = "Hey, how's your project coming along?",
        timestamp = "2025-05-17T14:00:00Z",
        status = "read",
        isTyping = false,
        senderId = 'user123',
    } = message;
    const isRead = status === 'read';
    const name = users[senderId]?.name;
    
    return (
        <div className={`flex ${!isMine ? 'justify-end' : 'justify-start'}`}>
            {isTyping ? <TypingIndicator name={name} /> :
                <div className={`max-w-xs px-4 py-2 rounded-lg ${!isMine ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    <p className="text-left">{text}</p>
                    <div className="flex text-xs mt-1 items-center justify-end space-x-1">
                        <span>{formatTime(timestamp)}</span>
                        {isRead ? <CheckCheck size={10} /> : <Check size={10} />}
                    </div>
                </div>}
        </div>
    )
}