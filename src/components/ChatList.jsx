import React from "react";
import ConversationSearch from "./ConversationSearch";
import UserConversation from "./UserConversation";

export default function ChatList({ conversations, activeConversation, onClick }) {
    return (
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <ConversationSearch />
            </div>
            {conversations.map((conversation) => (
                <UserConversation
                    key={conversation?.id}
                    conversation={conversation}
                    isActive={activeConversation === conversation?.id}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}