import React, { useEffect, useRef } from "react";
import Message from "../Message/Message";
import "./MessageArea.css";

const MessageArea = ({ messages }) => {
  const messageAreaRef = useRef(null);

  const latestMessages = messages;

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messageAreaRef} className="d-flex flex-column py-3 px-5 message-area-container" style={{ overflowY: "auto" }}>
      {
        latestMessages.map((message, index) => (
          <div key={index}>
            <Message message={message} />
            {
              latestMessages[index + 1] && message.type !== latestMessages[index + 1]?.type && (
                <div className="mb-4"></div>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default MessageArea;
