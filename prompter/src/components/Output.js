import React from 'react';

function Output({ improvedPrompt }) {
  return (
    <div className='result'>
      <h3>Suggested prompt:</h3>
      <div>
        <textarea type="text" value={improvedPrompt} id="resulttext">
        </textarea>

        

      </div>
      
    </div>
  );
}

export default Output;
