import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

import AppClass from './components/AppClass';
import AppFunction from './components/AppFunction';
import JsxElement from './components/JsxElement';
import { NumberList, NumberListKey } from './components/Lists';
import Greeting from './components/Conditionals';
import Clock from './components/StateFlow';
import LoginControl from './components/State';

import Layout from './components/weather/Layout'

// JSX
// <JsxElement />

// lists
// const numbers = [1, 2, 3, 4, 5];
// <NumberList numbers={numbers} />

// conditionals
// <Greeting isLoggedIn={false} />

// State
// <LoginControl />

// StateFlow
// <Clock />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberListKey />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
