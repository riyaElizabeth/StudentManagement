import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Containers/Counter/Counter';
import * as serviceWorker from './serviceWorker';
//import Table from './Containers/Student/Student';
//import Table from './Containers/Student/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Containers/Student/Home'
import {BrowserRouter , Route} from 'react-router-dom'
//import {Nav,Link} from 'reactstrap'
import Home from './Containers/Student/Home'
import student from './Containers/Student/Student';
import Table from './Containers/Student/Table'
import Addrow from './Containers/Student/Addrow';
import Search from './Containers/Student/Search';
import App  from './App'
ReactDOM.render(

  
  <React.StrictMode>

    <BrowserRouter>
  
  <Route exact path="/"  component ={Home}  />
  <Route path="/Home" component ={Home}/>
  <Route path="/Add" component ={Addrow}/>
  <Route path="/Student" component ={Table}/>
  <Route path="/Search" component ={Search}/>
</BrowserRouter>
    
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
