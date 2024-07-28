import React from 'react';

function Controls({ improvePrompt }) {
  return (
    <div>
      <button id='sub_btn' onClick={() => improvePrompt('grammar')}>Improve Prompt!</button>
    </div>
  );
}

export default Controls;