/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";


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