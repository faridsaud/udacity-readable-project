/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";


class HomePage extends Component {

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