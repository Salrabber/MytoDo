import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const arr = [{title:'one', id:1},{id:2, title:'twoo'},{id:3, title:'three'},{id:4, title:'foooour'}]
const arg = [1,23,4,3,35,33]
console.log(arr.sort((a,b) => {return a - b}))

// if (arg.every(symb => {return symb > 30})) {console.log('da')} else {console.log('net')}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
