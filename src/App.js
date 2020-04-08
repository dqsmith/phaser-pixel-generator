import React from 'react';
import { useDispatch } from 'react-redux';
import { set } from './store/actions';

import Draw from './containers/Draw';
import Controls from './containers/Controls';

import './App.scss';

const App = (props) => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(set());
  }, 100);

  return (
    <div className="App container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <Controls />
            <Draw renderer={props.renderer} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
