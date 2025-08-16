import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Phaser from 'phaser';

const Render = () => {
  const grid = useSelector((state) => state.gridReducer).grid;
  const size = useSelector((state) => state.sizeReducer);
  const contrast = useSelector((state) => state.utilsReducer).contrast;
  const scale = useSelector((state) => state.utilsReducer).scale;
  const gameRef = useRef(null);
  let image = [];

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        type: Phaser.CANVAS,
        parent: 'renderer',
        width: 200,
        height: 200,
        clearBeforeRender: false,
        backgroundColor: '#fff',
        render: {
          pixelArt: true,
          antialias: true,
        },
      };

      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  const renderer = gameRef.current;

  if (renderer && renderer.canvas) {
    renderer.canvas.width = size.width * scale;
    renderer.canvas.height = size.height * scale;
  }

  grid.forEach((row) => {
    let imageRow = '';
    row.forEach((cell) => {
      imageRow += cell.value;
    });
    image.push(imageRow);
  });

  if (image.length && renderer && renderer.textures) {
    const texture = renderer.textures.generate(
      new Date().getTime().toString(),
      { data: image, pixelWidth: scale }
    );

    if (renderer.canvas && renderer.canvas.getContext) {
      const ctx = renderer.canvas.getContext('2d');
      ctx.drawImage(texture.getCanvas(), 0, 0);
      renderer.canvas.style.backgroundColor = contrast ? '#fff' : '#000';
    }

    if (renderer.loop) {
      renderer.loop.stop();
    }
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="is-column-header">Render</h1>
          <div className="columns">
            <div className="column">
              <div id="renderer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;
