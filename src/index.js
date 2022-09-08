import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import GlobalReset from "./globalReset/GlobalReset"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalReset />
    <App />
  </React.StrictMode>
);

