import React from 'react';

function Input({prompt, setPrompt})
{
    return(
        <div>
            <textarea
            value={prompt}
            onChange={(e)=> setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            />
        </div>
    );
}

export default Input;