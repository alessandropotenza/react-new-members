import './App.css';
import React from 'react';
import { useState } from 'react';

// import styled from 'styled-components';

//look at state variable to change text on label


function App() {

  const [num, setNum] = useState(0);

  return (
    <div className='outer' style={{backgroundColor: "white"}}>
      <button id="but1" type="button">-</button>
      <div className="inner">
       <button onClick={setNum(num+1)}>
        +
       </button>
      </div>
      <label id="l1" type="label">{num}</label>
    </div>
  );
}

export default App;
