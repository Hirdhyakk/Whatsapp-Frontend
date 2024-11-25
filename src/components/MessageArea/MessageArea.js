import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import "./MessageArea.css";

const MessageArea = ({ messages, isGroup }) => {
  const messageAreaRef = useRef(null);
  const [latestMessages, setLatestMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  // const hasScrolled = useRef(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // useEffect(() => {
  //   if (!hasScrolled.current && latestMessages.length > 0 && messageAreaRef.current) {
  //     console.log('scroll', hasScrolled.current);
  //     messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
  //     hasScrolled.current = true;
  //   }
  // }, [latestMessages]);

  useEffect(() => {
    if (!hasScrolled && latestMessages.length > 0 && messageAreaRef.current) {
      console.log('scroll', hasScrolled);
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
      setHasScrolled(true);
    }
  }, [latestMessages, hasScrolled]);

  useEffect(() => {
    setLatestMessages(messages.length > 20 ? messages.slice(-20) : messages);
    setHasScrolled(false);
  }, [messages]);

  useEffect(() => {
    const msg0Element = document.getElementById(`msg-${latestMessages[0]?.messageId}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loading) {
          const newMessages = messages.slice(messages.length - (latestMessages.length + 20) > 0 || 0, messages.length - latestMessages.length);
          // console.log('newMessages', newMessages, messages.length - (latestMessages.length + 20) > 0 || 0, messages.length - latestMessages.length);
          if (newMessages.length > 0) {
            setLoading(true);
            setLatestMessages((prevMessages) => [...newMessages, ...prevMessages]);
            setLoading(false);
          } else if (msg0Element) {
            observer.unobserve(msg0Element);
          }
        }
      });
    }, { threshold: 1.0 });

    if (msg0Element) {
      observer.observe(msg0Element);
    }

    return () => {
      if (msg0Element) {
        observer.unobserve(msg0Element);
      }
    };
  }, [latestMessages, messages, loading]);

  return (
    <div ref={messageAreaRef} className="d-flex flex-column py-3 px-5 message-area-container" style={{ overflowY: "auto" }}>
      {console.log('latestMessages', [...latestMessages])}
      {
        latestMessages.length > 0 &&
        latestMessages.map((message, index) => (
          <div key={message.messageId} id={`msg-${message.messageId}`}>
            <Message message={message} isGroup={isGroup} />
            {
              latestMessages[index + 1] && message.messageType !== latestMessages[index + 1]?.messageType && (
                <div key={`separator-${message.messageId}`} id={`separator-${message.messageId}`} className="mb-3"></div>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default MessageArea;
