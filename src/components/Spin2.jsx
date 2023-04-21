import '../App.css';

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Rotating from './RotatingWords'

function WordCube() {
  const [input, setInput] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sentences = input.split(/[.?!]/);
    setInput(sentences);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your text:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="word-cube">
        {Array.isArray(input) && input.length > 0 && input.map((sentence, index) => (
          <div key={index} id="cube" style={{ width: '4em', height: '8em' }}>
            {sentence.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                <div style={{ transform: `translate3d(${index % 2 === 0 ? '0' : '4'}em, ${Math.floor(index / 2)}em, ${index % 2 === 0 ? '2' : '-2'}em)` }}>
                  <div>{word}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default WordCube;
