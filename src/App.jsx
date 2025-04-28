import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount(count + 5);
  };

  const handleDecrement = () => {
    setCount(count - 5);
  };
  const handleMultiplication = () => {
    setCount(count * 5);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mt-5">
        <button onClick={handleIncrement}>click me to increase</button>
        <button onClick={handleDecrement}>click me to decrease</button>
        <button onClick={handleMultiplication}>click me to multiply</button>

        <p>you click {count} time in click me button</p>
      </div>
      <div className="container">
        <h4>Welcome back to login page</h4>
      </div>
    </>
  );
}

export default App;
