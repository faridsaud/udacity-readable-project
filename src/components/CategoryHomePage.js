/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Category from "./Category";
import Menu from "./Menu";


class CategoryHomePage extends Component {

    render() {
        return (
            <div className="container">
                <Category/>
            </div>
        )
    }
}

CategoryHomePage.propTypes = {};
export default CategoryHomePage;