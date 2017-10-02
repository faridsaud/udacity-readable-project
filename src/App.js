import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
            <Route exact path='/' render={() => (
                <HomePage />
            )}/>
    );
  }
}

export default App;
