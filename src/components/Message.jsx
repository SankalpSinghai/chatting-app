import React from "react";
import { Check } from "lucide-react";

export default function Message({ index }) {
    const isMine = index % 2 === 0;

    return (
        <div className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${isMine ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <p>Hello! How are you?</p>
                <div className="flex text-xs mt-1 items-center justify-end space-x-1">
                    <span>3.30pm</span>
                    <Check size={10}/>
                </div>
            </div>
        </div>
    )
}