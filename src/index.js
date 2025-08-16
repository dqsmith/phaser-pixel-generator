import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';

import '../node_modules/bulma/css/bulma.css';
import '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css';
import './index.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
