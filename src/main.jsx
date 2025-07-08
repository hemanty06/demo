import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App.jsx';
import PelletList from './components/PelletList.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
