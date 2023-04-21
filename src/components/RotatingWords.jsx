import React from 'react';

function WordCube({ input }) {
  return (
    <div className="word-cube" >
      {Array.isArray(input) && input.length > 0 && input.map((sentence, index) => (
        <div key={index} id="cube" style={{ width: '4em', height: '8em', fontSize: '20px' }}>
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
  );
}

export default WordCube;