import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [a, SetA] = useState(0);
  const [b, SetB] = useState(0);

  const IncreaseA = () => {
    SetA(a + 1);
  }
  const DecreaseB = () => {
    SetB(b - 1);
  }
  useEffect(() => {
    console.log("useEffect is called");
  }, [a])
  
  function bchanging() {
    console.log("b is changing");
  }
  function achanging() {
    console.log("a is changing");
  }
  useEffect(() => {
    bchanging();
    
  }, [b])
  useEffect(() => {
    achanging();
  }, [a])
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={IncreaseA}>+</button>
      <h1>{b}</h1>
      <button onClick={DecreaseB}>-</button>

      <hr />
      <h1>{a}</h1>
      <button onClick={() => {
        SetA(a + 1);
      }}>+</button>
      <h1>{b}</h1>
      <button onClick={() => {
        SetB(b - 1);
      }}>-</button>
    </div>
  );
}

export default App