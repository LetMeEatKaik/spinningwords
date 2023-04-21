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
      <h1>Spin your text</h1>
      <p>Make your text spin by sending text from the text area</p>
      <br />
      <br />
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
        <br />
        <Button variant="outline-primary" type="spi" style={{
          borderColor: '#ddd',
          color: '#ddd', borderRadius: '0'
        }}>Submit</Button>

      </Form>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 200px)' }}>
        <Rotating input={input} />
      </div>
      {/* <div className="word-cube">
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
      </div> */}
    </Container>
  );
}

export default WordCube;
