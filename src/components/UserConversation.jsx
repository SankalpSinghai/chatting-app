import { Image } from "lucide-react";
import React from "react";

export default function UserConversation() {
    const isStatus = false;
    return (
        <div className="flex items-center p-3 cursor-pointer">
            <div className="relative mr-3">
                <div className="flex w-12 h-12 rounded-full bg-gray-200 items-center justify-center">
                    <Image />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isStatus ? 'bg-green-500' : 'bg-gray-400'} border-2 border-white`}></span>
                </div>

            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semi-bold truncate">Sankalp</h3>
                    <span className="text-xs text-gray-500 white-space-nowrap ml-1">3:30pm</span>
                </div>
            </div>
        </div>
    )
}