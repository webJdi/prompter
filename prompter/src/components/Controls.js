import React from 'react';

function Controls({ improvePrompt }) {
  return (
    <div>
      <button onClick={() => improvePrompt('grammar')}>Improve Prompt!</button>
    </div>
  );
}

export default Controls;