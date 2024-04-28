import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ChatDialogue = ({ onHide }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = () => {
    if (inputText.trim() === '') return;

    // Add user message to the list of messages
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    
    // Replace this with actual logic to communicate with your backend or AI model
    // This is just a placeholder
    const responseText = "Hello";

    // Add response message to the list of messages
    setMessages([...messages, { text: responseText, sender: 'assistant' }]);

    // Clear input field after submitting message
    setInputText('');
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Chat Dialogue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="chat-dialogue">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={message.sender}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleMessageSubmit();
              }}
            />
            <button onClick={handleMessageSubmit}>Send</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// const ChatButton = ({ onClick }) => {
//   return (
//     <button onClick={onClick} className="chat-button">
//       Open Chat
//     </button>
//   );
// };

// const App = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const handleClose = () => {
//     setIsChatOpen(false);
//   };

//   return (
//     <div className="app">
//       {isChatOpen && <ChatDialogue handleClose={handleClose} />}
//       <ChatButton onClick={() => setIsChatOpen(true)} />
//     </div>
//   );
// };

// export default App;
