import React from "react";
import { Image } from "lucide-react";
import { formatTime } from "../utils";

export default function UserConversation({ conversation, isActive, onClick }) {
    const {
        id = "user456",
        name = "Taylor Smith",
        status = "online",
        lastSeen = "2025-05-17T14:30:00Z",
        lastMessage = {
            text: "Thanks for sharing! The interface looks clean and intuitive.",
            timestamp: "2025-05-17T14:20:00Z",
        },
    } = conversation;
    const isOnline = status === 'online';
    return (
        <div className={`flex items-center p-3 cursor-pointer ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`} onClick={() => { onClick(id) }}>
            <div className="relative mr-3">
                <div className="flex w-12 h-12 rounded-full bg-gray-200 items-center justify-center">
                    <Image />
                    <span
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"
                            } border-2 border-white`}
                    />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semi-bold truncate">{name}</h3>
                    <span className="text-xs text-gray-500 white-space-nowrap ml-1">
                        {formatTime(lastSeen)}
                    </span>
                </div>
            </div>
        </div>
    );
}
