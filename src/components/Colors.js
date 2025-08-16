import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentColor } from '../store/actions';

const Colors = () => {
  const dispatch = useDispatch();
  const storedColor = useSelector((state) => state.colorReducer).color;
  const colors = [
    { value: 1, color: '#9d9d9d', visible: true },
    { value: 2, color: '#ffffff', visible: true },
    { value: 3, color: '#be2634', visible: true },
    { value: 4, color: '#e06f8b', visible: true },
    { value: 5, color: '#493c2b', visible: true },
    { value: 6, color: '#a46423', visible: true },
    { value: 7, color: '#eb8932', visible: true },
    { value: 8, color: '#f8e26b', visible: true },
    { value: 9, color: '#2f484e', visible: true },
    { value: 'A', color: '#44891a', visible: true },
    { value: 'B', color: '#a3ce27', visible: true },
    { value: 'C', color: '#1a2632', visible: true },
    { value: 'D', color: '#005784', visible: true },
    { value: 'E', color: '#31a2f1', visible: true },
    { value: 'F', color: '#b2dcef', visible: true },
    { value: '.', color: '', visible: false },
  ];

  let colorStyle = {
    backgroundColor: storedColor.color,
    border: '1px solid #ccc',
  };

  if (storedColor.color === '') {
    colorStyle = Object.assign(colorStyle, {
      backgroundImage: 'url("../images/transparent.png")',
      backgroundSize: 'contain',
    });
  }

  const changeColor = (event) => {
    const selectedColor = colors.find((color) => color.value === event.value);
    dispatch(currentColor(selectedColor));
  };

  const createColors = () => {
    let cells = [];

    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      const colorClass = color.visible
        ? 'color-cell'
        : 'color-cell transparent-cell';

      cells.push(
        <div
          className={colorClass}
          onClick={() => changeColor(color)}
          key={i}
          style={{ backgroundColor: colors[i].color }}
        ></div>
      );
    }

    return <div className="color-grid">{cells}</div>;
  };

  return (
    <div className="columns">
      <div className="column">
        <h1 className="is-column-header">Colors</h1>
        <div className="columns">
          <div className="column">
            <div>{createColors()}</div>
            <div className="selected-color-container" style={colorStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
