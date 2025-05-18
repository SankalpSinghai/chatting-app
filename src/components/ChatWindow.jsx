import React from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";


export default function ChatWindow({ messages, currentUser, onChange, myMsg, onMsgSent }) {
    return (
        <div className="flex flex-col flex-1">
            <MessageList
                messages={messages}
                currentUser={currentUser}
            />
            <MessageInput
                onChange={onChange}
                myMsg={myMsg}
                onMsgSent={onMsgSent}
            />
        </div>
    )
}