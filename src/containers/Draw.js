import React, { useState } from 'react';

import Grid from '../components/Grid';
import Render from '../components/Render';
import Download from '../components/Download';
import Modal from '../components/Modal';

const Draw = () => {
  let [show, setShowModal] = useState(false);

  const showModal = (show) => {
    setShowModal(show);
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <Grid />
        </div>
        <div className="column">
          <Render />
        </div>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <Download showModal={showModal} />
        </div>
      </div>
      <Modal show={show} showModal={showModal} />
    </div>
  );
};

export default Draw;
