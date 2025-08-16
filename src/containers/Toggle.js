import React from 'react';

const Toggle = (props) => {
  const handler = props.handler;
  return (
    <div className="field">
      <input
        id="switch"
        type="checkbox"
        name="switch"
        className="switch  is-medium is-info"
        defaultChecked="checked"
        onChange={handler}
      />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default Toggle;
