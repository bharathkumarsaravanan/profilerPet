import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Profiler } from 'react';
import "../node_modules/clcomponents/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
}

root.render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
);
