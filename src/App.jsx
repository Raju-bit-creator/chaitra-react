import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

import HeroSection from "./components/Banner";
import Card from "./components/card";

function App() {
  const [text, setText] = useState("dark mode");
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setText("dark mode");
    } else {
      setMode("dark");

      setText("light mode");
    }
  };

  let brandName = "Hamro-bazzar";

  return (
    <>
      <Navbar
        mode={mode}
        text={text}
        brandName={brandName}
        toggleMode={toggleMode}
      />{" "}
      {/* //passing mode as props */}
      <HeroSection />
      <Card toggleMode={toggleMode} mode={mode} />
    </>
  );
}

export default App;
