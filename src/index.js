import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Containers/Counter/Counter';
import * as serviceWorker from './serviceWorker';
import Table from './Containers/Table/Table';
import Search from './Containers/Table/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
 
   <Search/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
