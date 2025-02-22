
import { useState } from 'react';
import './App.css';

function App() {
  const [ text, setText] = useState("");

  const handleChange=(e)=>{
    setText(e.target.value);
  }
  const handleClick=()=>{
    setText("");
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="App">
      <header className='header'>
        <h2>Word Counter</h2>
        <p>Free online character and word count tool.</p>
      </header>
      <main className='main'>
        <textarea 
          className='textContent' 
          value={text}
          placeholder='Type or Paste Content here...' 
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick} style={{
          cursor : text.length >0 ? "pointer" : "not-allowed"        }}>Clear</button>
      <footer className='footer'>
        <span >Character:{charCount} </span>
        <span>Word:{wordCount}</span>
      </footer>
      </main>
    </div>
  );
}

export default App;
