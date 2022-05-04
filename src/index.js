import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Perf from './Perf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      location.pathname == '/perf' ? (<Perf />) : (<App />)
    }
  </React.StrictMode>
);
