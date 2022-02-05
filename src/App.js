import { useState } from "react";

let adjustInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);
  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };

  const resatWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Start Stop watch</h1>
        <h3>{watch}</h3>
        <div className="buttonclass">
          <button
            style={{ background: "green" }}
            disabled={started}
            onClick={startWatch}
          >
            Start
          </button>
          <button style={{ background: "red" }} onClick={stopWatch}>
            Stop
          </button>
          <button
            style={{ background: "yellow", color: "black" }}
            onClick={resatWatch}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
