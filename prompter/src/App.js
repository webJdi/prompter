import React, { useState } from 'react';
import axios from 'axios';
import Input from "./components/Input";
import Controls from './components/Controls';
import Output from './components/Output';
import './App.css';


function copyText() {
  var copyText = document.getElementById("resulttext");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}



function App() {
  const [prompt, setPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const improvePrompt = async (type) => {
    try {
      const response = await axios.post('http://localhost:5000/improve', {
        prompt: prompt,
      });
      setImprovedPrompt(response.data.improved_prompt);
    } catch (error) {
      console.error('Error improving prompt:', error);
    }
  };

  return (
    <div className="App">
      <svg id='atomlogo' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#fff" d="M14.5,43.1c-1,0-1.7-0.3-2.2-0.7c-1.4-1-2.3-2.8-2.3-5c-0.1-4.7,2.4-11.5,6.7-18.1 C22.1,11,29,5.2,33.5,5c1,0,1.9,0.2,2.6,0.6c1.9,1.2,2.9,4.1,0.8,7.9c-0.3,0.5-0.9,0.7-1.4,0.4c-0.5-0.3-0.7-0.9-0.4-1.4 c1.3-2.3,1.2-4.4-0.2-5.2C34.6,7.1,34.2,7,33.6,7c-3.3,0.1-9.6,4.8-15.2,13.4C14.3,26.6,11.9,33,12,37.3c0,1.6,0.5,2.8,1.4,3.4 l0.1,0.1c0.4,0.4,2.2,0.5,4.8-1.6c0.4-0.4,1.1-0.3,1.4,0.1c0.4,0.4,0.3,1.1-0.1,1.4C17.5,42.5,15.8,43.1,14.5,43.1z"></path><path fill="#fff" d="M40,31c-0.4,0-0.8-0.2-0.9-0.6c-0.2-0.5,0.1-1.1,0.6-1.3c2.5-1,4.3-2.6,4.3-4 c0.2-2.9-7.2-6.3-19.8-7C23,18,22,18,21,18c-9.9,0-16.9,2.1-17,5.1c-0.1,1.2,2,3.1,4.4,4c0.5,0.2,0.8,0.8,0.6,1.3 c-0.2,0.5-0.8,0.8-1.3,0.6c-2.9-1.1-5.8-3.5-5.6-6C2.2,18.6,9.3,16,21,16c1,0,2.1,0,3.3,0.1c11,0.6,22,3.6,21.7,9.1 c-0.1,2.3-2.3,4.5-5.6,5.8C40.2,31,40.1,31,40,31z"></path><path fill="#fff" d="M32.1,44c-0.6,0-1.3-0.1-2-0.4c-4.5-1.5-10.1-7.9-13.8-15.7C13.8,22.7,12.1,16,12,10.7 c-0.1-3.3,0.7-5.4,2.4-6.3c0.5-0.2,1-0.4,1.5-0.4c1.6-0.1,3.5,0.9,5.8,3.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0 C17.9,6.3,16.6,6,16.1,6c-0.3,0-0.5,0.1-0.8,0.2c-0.9,0.5-1.4,2-1.3,4.5c0.1,4.1,1.3,10.8,4,16.4c4.1,8.5,9.4,13.6,12.7,14.7 c0.9,0.3,1.7,0.3,2.3,0.1c1.9-1.7,1.2-9.8-2.9-19.4c-0.2-0.5,0-1.1,0.5-1.3c0.5-0.2,1.1,0,1.3,0.5c3.8,8.8,5.8,19.2,2.2,21.9 L34,43.6C33.4,43.9,32.8,44,32.1,44z"></path><path fill="#fff" d="M27,24c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S27,22.3,27,24z"></path>
      </svg>
      <h1 id='heading'><span>Pro</span>mpto!</h1>
      <Input prompt={prompt} setPrompt={setPrompt} />
      <Controls improvePrompt={improvePrompt} />
      <Output improvedPrompt={improvedPrompt} />
    </div>
  );
}

export default App;
