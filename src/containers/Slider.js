import React from 'react';

const Slider = (props) => {
  const handler = props.handler;
  const value = props.value;
  return (
    <div className="columns">
      <div className="column">
        <input
          className="slider is-large"
          onChange={handler}
          onClick={handler}
          step={1}
          min={1}
          max={20}
          value={value}
          type="range"
        />
      </div>
    </div>
  );
};

export default Slider;
