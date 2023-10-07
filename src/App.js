import './App.css';

import React, { useState } from 'react';


function App() {
  const [value, setValue] = useState(2);
  const [text, setText] = useState("First");

  function multiply() { // Modify this function
    setValue(value * 2)
  }

  function divide() { // Modify this function
    setValue(value / 2)
  }

  function change_text() { // Modify this function
    if (text == "First") {
      setText("Second");
    }
    else if (text == "Second") {
      setText("First");
    }
  }

  return (
    <body>
      <div className="centering">
        <center >
        <p className="numberdisplay">{value}</p>
        <button className="bluebutton" onClick={() => multiply()}> X </button>
        <button className="bluebutton" onClick={() => divide()}> / </button>
        <br></br>
        <button className="textbutton" onClick={() => change_text()}> {text} </button>
        </center>
      </div>
    </body>
  );
}

export default App;
