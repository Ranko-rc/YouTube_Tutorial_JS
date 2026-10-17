import "./styles.css"
import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";


export default function LightDarkMode() {

  const [mode, setMode] = useLocalStorage("mode", "light");

  function handleToggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={mode}>

      <div className="container">
        <h3>Hello World</h3>
        <button onClick={handleToggleMode}>Toggle Mode</button>
      </div>

    </div>
  );
}