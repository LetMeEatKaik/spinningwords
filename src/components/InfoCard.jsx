import { useState } from 'react';

function ExpandableCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <div>Click to expand</div>
        <i
          className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}
        />
      </div>
      {isOpen && (
        <div style={{ marginTop: '10px' }}>
          <div>
            I explore text, natural language processing and all things in-between. I am curious about ways of designing language to make it more accessible or engaging. 
          </div>
          <br />
          Acknowledgements: amazing tutorial here:
          <a href="https://x.st/spinning-diagrams-with-css/">https://x.st/spinning-diagrams-with-css/</a>
        </div>
      )}
    </div>
  );
}

export default ExpandableCard;
