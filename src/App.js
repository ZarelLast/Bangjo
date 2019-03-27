import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom' 
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login'
import Camera from './scenes/Cctvs/CCTV'

class App extends Component {
  render() {
    return (
      <div className='App bg-dark'>
      </div>
    );
  }
}

class Routing extends Component {
  render(){
    return(
      <Router className='bg-dark'>
        {/* <Route path='/' component={Login} /> */}
        {/* <Route path='/Login' exact component={Login} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/camera/:id' exact component={Camera} />
      </Router>
    )
  }
}

export default Routing;
