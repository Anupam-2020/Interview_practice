import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(4);

  const [isCounter, setIsCounter] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounter && count > 0) {
      interval = setInterval(() => {
        setCount((sec) => sec - 1);
        console.log(count);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCounter, count]);

  const startFunction = () => {
    setIsCounter(true);
  };

  return (
    <>
      <div className="App">
        <span>{count < 10 ? "0" + count : count}</span>
      </div>
      <button onClick={startFunction}>start</button>
    </>
  );
}
