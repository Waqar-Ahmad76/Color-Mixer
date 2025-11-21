import { useState } from "react";
import "./App.css";
import Slider from "./Slider";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function onSlide(e) {
    // console.log("changing")
    const { name, value } = e.target;
    if (name === "Red") {
      setRed(value);
    } else if (name === "Green") {
      setGreen(value);
    } else if (name === "Blue") {
      setBlue(value);
    }
  }

  return (
    <>
      <main>
        <div className="container">
          <Slider color={"Red"} onSlide={onSlide} value={red} />
          <Slider color={"Green"} onSlide={onSlide} value={green} />
          <Slider color={"Blue"} onSlide={onSlide} value={blue} />
        </div>
        <div className="spansContainer">
          <span>
            Your mixed color: rgb( {red}, {green}, {blue})
          </span>
          <span
            className="box"
            style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
          ></span>
        </div>
      </main>
    </>
  );
}

export default App;
