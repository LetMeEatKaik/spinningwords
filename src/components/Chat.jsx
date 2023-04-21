import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css'

function Chat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = `I understand that you said: ${message}`;
    setChat([...chat, { message, response }]);
    setMessage('');
  };

  return (
    <Container>
      <div className="chat-window">
        {chat.map((item, index) => (
          <div key={index} className="chat-bubble">
            <p className="user-message">{item.message}</p>
            <p className="response">{item.response}</p>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Type your message here"
          value={message}
          onChange={handleInput}
        />
        <Button type="submit" className="send-button">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Chat;
