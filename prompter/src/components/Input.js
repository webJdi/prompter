import React from 'react';

function Input({prompt, setPrompt})
{
    return(
        <div>
            <textarea
            id='inputtxt'
            value={prompt}
            onChange={(e)=> setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            />
        </div>
    );
}

export default Input;