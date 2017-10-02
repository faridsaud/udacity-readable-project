/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Category from "./Category";
import Menu from "./Menu";


class HomePage extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <br/>
                <div className="container">
                    <Category/>
                </div>
            </div>


        )
    }
}

HomePage.propTypes = {};
export default HomePage;