import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default withRouter(App);
