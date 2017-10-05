/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";


class CategoryHomePage extends Component {


    render() {
        return (
            <div className="container">
                {
                    this.props.match.params.categoryName && (
                        <Category name={this.props.match.params.categoryName}/>
                    )
                }
            </div>
        )
    }
}

CategoryHomePage.propTypes = {};
export default CategoryHomePage;