import React, {Component} from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
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
                <Switch>
                    <Route exact path='/' render={() => (
                        <HomePage/>
                    )}/>
                    <Route exact path='/:categoryName' render={(props) => (
                        <CategoryHomePage match={props.match}/>
                    )}/>
                    <Route exact path='/post/create' render={(props) => (
                        <CreatePost/>
                    )}/>
                    <Route exact path='/post/update/:id' render={(props) => (
                        <CreatePost isUpdate={true} match={props.match}/>
                    )}/>
                    <Route exact path='/:categoryName/:id' render={(props) => (
                        <PostDetail match={props.match}/>
                    )}/>
                </Switch>

            </div>


        );
    }
}

export default App;