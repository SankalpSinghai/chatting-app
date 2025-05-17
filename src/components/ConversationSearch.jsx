import { Search } from "lucide-react";
import React from "react";

export default function ConversationSearch() {
    return (
        <div className="relative">
            <input type="text" placeholder="Seach ..." className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none"/>
            <Search size={15} className="absolute left-3 top-2.5 text-gray-500" />
        </div>
    )
}