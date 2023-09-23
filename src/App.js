import "./App.css";
import { useState } from "react";
import Button from "./Button/Button";

const cyclingValues = ["Formula", "Electric", "2022"];

function App() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  function increment() {
    setCount((currCount) => currCount + 1);
  }

  function decrement() {
    setCount((currCount) => currCount - 1);
  }

  function cycle() {
    setIndex((currIndex) => (currIndex + 1) % cyclingValues.length);
  }

  return (
    <div className="container">
      <p className="count">{count}</p>
      <div className="adjust-count-container">
        <Button onClick={decrement} label="-" />
        <Button onClick={increment} label="+" />
      </div>
      <Button onClick={cycle} label={cyclingValues[index]} />
    </div>
  );
}

export default App;
