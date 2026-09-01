import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="component-box">
      <h2>Q5. Stopwatch</h2>

      <h1>{seconds} seconds</h1>

      <button onClick={start}>
        Start
      </button>

      <button onClick={pause}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
