/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";
import * as API from '../utils/Api'


class HomePage extends Component {

    componentDidMount() {
        console.log("API", API);
        API.getPostsByCategory("react").then(data=>{
            console.log("Data retrieved", data);
        })
        API.getPosts().then(data=>{
            console.log("Data retrieved", data);
        })
    }

    render() {
        return (

            <div className="container">
                <Category/>
                <br/>
                <Category/>
                <br/>
                <Category/>

            </div>

        )
    }
}

HomePage.propTypes = {};
export default HomePage;