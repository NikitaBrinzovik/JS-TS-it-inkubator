import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {slitInToWords} from "./js-ts-for-students/01-hello-test/01";
import {User} from "./js-ts-for-students/06-callback/callback";

ReactDOM.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById('root')
);

// const sentense = "Hello my FRIENDS!"
// const result = slitInToWords(sentense)
// console.log(result[0] === 'hello')
// console.log(result[1] === 'my')
// console.log(result[2] === 'friends')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
