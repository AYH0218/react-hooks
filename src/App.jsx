import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import PersonalInfoContext from './main';

//useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'incr':
      return state + 1;
    case 'decr':
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [timesNum, setTimesNum] = useState(2);
  const [divideNum, setDivideNum] = useState(2);
  const personalInfo = useContext(PersonalInfoContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  //useState
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

  // useEffect
  useEffect(() => {
    console.log('Hello Hooks');
    // setCount(count + 1); //無限ループ
  }, [count]);
  //  ↑に変更があったときに発火

  // useContext 階層を跨いで直接渡せる

  //useRef 指定した要素の値を見る
  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
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

      <hr />

      <h1>useContext</h1>
      <p>{personalInfo.name}</p>
      <p>{personalInfo.age}</p>

      <hr />

      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>

      <hr />

      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: 'incr' })}>+</button>
      <button onClick={() => dispatch({ type: 'decr' })}>-</button>

      <hr />

      <h1>useMemo</h1>
    </div>
  );
}

export default App;
