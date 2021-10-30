import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: 0, label: 'Eat', checked: true },
  { id: 1, label: 'Learn React.js', checked: false },
  { id: 3, label: '100 push-ups', checked: false }
]

ReactDOM.render(
  <React.StrictMode>
    <App subject="Ney Hernandez" tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info);
