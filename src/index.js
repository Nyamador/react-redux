import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './containers/store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

function fancyLog() {  
  console.log("%c Rendered with 👉 👉 👇 ", "background: blue; color: #FFF");   
  console.log(store.getState()); 
} 

const render = () => {

  fancyLog();
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};


render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
