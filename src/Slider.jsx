import React from "react";

function Slider({ color, onSlide, value }) {
  return (
    <div className="slider">
      {/* <span>{color}</span> */}
      <input
        name={color}
        type="range"
        max={255}
        min={0}
        onChange={onSlide}
        value={value}
      />
      <span>
        {color}: {value}
      </span>
    </div>
  );
}

export default Slider;
