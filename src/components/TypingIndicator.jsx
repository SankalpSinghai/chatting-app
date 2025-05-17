import React from 'react';

export default function TypingIndicator({ name }) {
    return (
        <div className='flex items-center text-gray-500 space-x-2'>
            <div className='flex space-x-1'>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-pulse'></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75'></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150'></div>
            </div>
            <span className='text-xs'>{name} is typing...</span>
        </div>
    )
}