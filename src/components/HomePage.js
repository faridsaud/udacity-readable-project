/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";
import {getCategories} from "../actions/Category";
import {connect} from "react-redux";

export class HomePage extends Component {

    componentDidMount() {
        this.props.getCategories();
    }


    render() {
        let categories = this.props.categories;
        return (
            <div className="container">
                {categories && categories.map((category) => {
                    return (
                        <div>
                            <Category name={category.name}/>
                            <br/>
                        </div>
                    )
                })

                }
            </div>

        )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.category.categories
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories())
});


HomePage.propTypes = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)