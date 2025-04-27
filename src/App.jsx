import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount(count + 5);
  };

  return (
    <>
      <div className="card">
        <button onClick={handleIncrement}>click me to increase</button>
        <button onClick={() => setCount((count) => count - 5)}>
          click me to decrease
        </button>
        <p>you click {count} time in click me button</p>
      </div>
    </>
  );
}

export default App;
