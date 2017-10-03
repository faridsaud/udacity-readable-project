import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import CategoryHomePage from "./components/CategoryHomePage";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";

class App extends Component {
  render() {
    return (
        <div className="app">
            <Menu/>
            <br/>
            <Route exact path='/' render={() => (
                <HomePage />
            )}/>
            <Route exact path='/category/:id' render={(props) => (
                <CategoryHomePage />
            )}/>
            <Route exact path='/post/(create|update/:id)' render={(props) => (
                <CreatePost />
            )}/>
            <Route exact path='/post/detail/:id' render={(props) => (
                <PostDetail />
            )}/>
        </div>


    );
  }
}

export default App;
