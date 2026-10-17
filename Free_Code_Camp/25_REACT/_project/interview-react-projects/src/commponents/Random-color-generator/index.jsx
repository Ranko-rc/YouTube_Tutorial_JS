import { useState } from "react";
import "./styles.css";

export default function RandomColorGenerator() {
  // Stav pro režim barvy: HEX nebo RGB
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // Stav pro aktuálně zobrazenou barvu
  const [color, setColor] = useState("#000000");

  // Text pro název režimu a popis
  const colorLabel = typeOfColor === "hex" ? "HEX" : "RGB";
  const colorDescription =
    typeOfColor === "hex"
      ? "HEX uses a 6-digit code, such as #FF5733, for red, green and blue values."
      : "RGB defines a color by 3 values: red, green and blue, each from 0 to 255.";

  // Vygeneruje náhodnou barvu podle vybraného režimu
  function getRandomColor() {
    if (typeOfColor === "hex") {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
    }

    if (typeOfColor === "rgb") {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    }

    return "#000000";
  }

  // Aktualizuje barvu po stisknutí tlačítka
  function handleCreateRandomColor() {
    setColor(getRandomColor());
  }

  return (
    <div className="color-generator">
      <div className="color-card">
        <div className="color-header">
          <span className="mode-badge">{colorLabel}</span>
          <span className="mode-text">
            {typeOfColor === "hex" ? "Hexadecimal" : "RGB mode"}
          </span>
        </div>

        {/* Barevné pole s aktuální hodnotou */}
        <div className="color-box" style={{ backgroundColor: color }}>
          <span className="color-value">{color}</span>
        </div>

        <p className="color-description">{colorDescription}</p>

        {/* Tlačítka pro přepínání mezi HEX a RGB */}
        <div className="button-group">
          <button
            className={typeOfColor === "hex" ? "active" : ""}
            onClick={() => setTypeOfColor("hex")}
          >
            HEX
          </button>
          <button
            className={typeOfColor === "rgb" ? "active" : ""}
            onClick={() => setTypeOfColor("rgb")}
          >
            RGB
          </button>
        </div>

        {/* Tlačítko pro vygenerování nové barvy */}
        <button className="generate-btn" onClick={handleCreateRandomColor}>
          Generate {colorLabel} color
        </button>
      </div>
    </div>
  );
}

