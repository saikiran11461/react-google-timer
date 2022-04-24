import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timer) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10)
    }
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer])


  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 100) % 100)).slice(-2)}</span>

      </div>

      <div>
        {!timer && time === 0 && (
          <button onClick={() => setTimer(true)}>Start</button>

        )}

        {timer && (
          <button onClick={() => setTimer(false)}>Stop</button>

        )}

        {!timer && time !== 0 && (
          <button onClick={() => setTimer(true)}>Resume</button>

        )}

        {!timer && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>

        )}

      </div>

    </div>
  );
}

export default App;