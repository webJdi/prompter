import React, { useState } from 'react';
import axios from 'axios';
import Input from "./components/Input";
import Controls from './components/Controls';
import Output from './components/Output';
import './App.css';

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
      <h1>Prompt Improver</h1>
      <Input prompt={prompt} setPrompt={setPrompt} />
      <Controls improvePrompt={improvePrompt} />
      <Output improvedPrompt={improvedPrompt} />
    </div>
  );
}

export default App;
