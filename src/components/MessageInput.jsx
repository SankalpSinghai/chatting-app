import React from "react";
import { Send } from "lucide-react";


export default function MessageInput() {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Type your msg..."
                value={'Hi Sankalp'}
                className="flex-1 border rounded-full px-2 py-4 focus:outline-none focus:border-blue-500"
            />
            <button
                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none disabled:opacity-50">
                <Send size={20} />
            </button>
        </div>
    )
}