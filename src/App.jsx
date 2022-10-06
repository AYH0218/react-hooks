import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timesNum, setTimesNum] = useState(2);
  const [divideNum, setDivideNum] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const times = () => {
    setCount(count * timesNum);
  };

  const divide = () => {
    setCount(count / divideNum);
  };

  const countReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>UseState</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={countReset}>C</button>
      <br />
      <button onClick={times}>x{timesNum}</button>
      <input className="area" type="number" width="1" value={timesNum} onChange={(e) => setTimesNum(e.target.value)}></input>
      <br />
      <button onClick={divide}>÷{divideNum}</button>
      <input className="area" type="number" size="2" value={divideNum} onChange={(e) => setDivideNum(e.target.value)}></input>
    </div>
  );
}

export default App;
