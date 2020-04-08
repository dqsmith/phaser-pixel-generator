import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Phaser from 'phaser'

import store from './store';

import '../node_modules/bulma/css/bulma.css';
import '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css'
import './index.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';

const config = {
  type: Phaser.CANVAS,
  parent: 'renderer',
  width: 200,
  height: 200,
  clearBeforeRender: false,
  backgroundColor: '#fff',
  render: {
    pixelArt: true,
    antialias: true
  }
};

const renderer = new Phaser.Game(config);

ReactDOM.render(
  <Provider store={store}>
    <App renderer={renderer} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
