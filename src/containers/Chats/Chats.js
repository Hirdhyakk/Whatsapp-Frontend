import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import chats from '../../data/data.js'

function Chats() {
    const [currentChatId, setCurrentChatId] = useState(null);

    function EscapeKeyHandler() {
        useEffect(() => {
            // Define the keydown event handler
            const handleKeyDown = (event) => {
                if (event.key === 'Escape') {
                    setCurrentChatId(null);
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);
    }
    EscapeKeyHandler();

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Sidebar setCurrentChatId={setCurrentChatId} chats={chats} />
            <ChatWindow currentChat={chats.find(chat => chat.id === currentChatId)} />
        </div>
    )
}

export default Chats;