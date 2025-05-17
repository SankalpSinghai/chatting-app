import React from "react";
import Message from "./Message";

export default function MessageList() {
    const sampleResponse = [1, 2, 3, 4, 5];
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {sampleResponse.map((each, index) => (

                <Message key={index} index={index} />
            ))}
        </div>
    )
}