import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const [isCounter, setIsCounter] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounter) {
      interval = setInterval(() => {
        if (sec > 0) {
          setSec((sec) => sec - 1);
          console.log(sec);
        }

        if (min > 0 && sec === 0) {
          setMin((min) => min - 1);
          setSec(59);
        }

        if (hour > 0 && min === 0 && sec === 0) {
          setHour((hour) => hour - 1);
          setMin(59);
          setSec(59);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCounter, sec, min, hour]);

  const startFunction = () => {
    setIsCounter(true);
  };

  const resetTimer = () => {
    setHour(0);
    setMin(0);
    setSec(0);
  };

  return (
    <>
      <div className="App">
        <div> hour : min : sec</div>
        <div>
          <input
            type="number"
            placeholder="hour"
            onChange={(e) => setHour(e.target.value)}
          />
          <input
            type="number"
            placeholder="minute"
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="second"
            onChange={(e) => setSec(e.target.value)}
          />
        </div>

        <span>{hour < 10 ? "0" + hour : hour}</span>
        <span>:</span>
        <span>{min < 10 ? "0" + min : min}</span>
        <span>:</span>
        <span>{sec < 10 ? "0" + sec : sec}</span>

        <div>
          {!isCounter ? (
            <button onClick={startFunction}>start</button>
          ) : (
            <button onClick={() => setIsCounter(false)}>stop</button>
          )}

          <button onClick={resetTimer}>reset</button>
        </div>
      </div>
    </>
  );
}
