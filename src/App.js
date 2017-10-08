import React, {Component} from "react";
import "./App.css";
import {Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import CategoryHomePage from "./components/CategoryHomePage";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";

class App extends Component {

    componentDidMount() {
        console.log("Props APP:", this.props);
    }

    render() {
        return (
            <div className="app">
                <Menu/>
                <br/>
                <Route exact path='/' render={() => (
                    <HomePage />
                )}/>
                <Route exact path='/category/:categoryName' render={(props) => (
                    <CategoryHomePage match={props.match}/>
                )}/>
                <Route exact path='/post/create' render={(props) => (
                    <CreatePost />
                )}/>
                <Route exact path='/post/update/:id' render={(props) => (
                    <CreatePost isUpdate={true} match={props.match}/>
                )}/>
                <Route exact path='/post/detail/:id' render={(props) => (
                    <PostDetail match={props.match}/>
                )}/>
            </div>


        );
    }
}

export default App;