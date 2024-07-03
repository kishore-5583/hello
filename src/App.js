import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (val) => {
    setInput(input + val);
  };

  const handleResult = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      setResult(eval(input)); // Caution: eval can be dangerous
    } catch (error) {
      setResult('Error');
    }
  };
  const clearinput = ()=>{
    setInput('');
    setResult('0');
  }
  return (
    <div>
      <form onSubmit={handleResult}>
        <center>
          <h2 >Simple Calculater</h2>
          <input type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)} /> <br />
          <br />
          <div>
            <button type="button" onClick={() => handleClick('1')}>1</button>
            <button type="button" onClick={() => handleClick('2')}>2</button>
            <button type="button" onClick={() => handleClick('3')}>3</button>
            <button type="button" onClick={() => handleClick('+')}>+</button>
          </div>
          <br />
          <div>
            <button type="button" onClick={() => handleClick('4')}>4</button>
            <button type="button" onClick={() => handleClick('5')}>5</button>
            <button type="button" onClick={() => handleClick('6')}>6</button>
            <button type="button" onClick={() => handleClick('-')}>-</button>
          </div>
          <br />
          <div>
            <button type="button" onClick={() => handleClick('7')}>7</button>
            <button type="button" onClick={() => handleClick('8')}>8</button>
            <button type="button" onClick={() => handleClick('9')}>9</button>
            <button type="button" onClick={() => handleClick('*')}>*</button>
          </div>
          <br />
          <div>
            <button type="button" onClick={() => handleClick('0')}>0</button>
            <button type="button" onClick={() => handleClick('.')}>.</button>
            <button type="button" onClick={clearinput}>C</button>
            <button type="button" onClick ={() => handleClick('/')}>/</button>
          </div>
          <br />
          <button type="submit">Result</button>
          <p>Result is {result}</p>
        </center>
      </form>
    </div>
  );
};

export default App;
