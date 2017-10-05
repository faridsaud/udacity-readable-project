/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Category from "./Category";
import {fetchGetCategories} from "../actions/Category";
import {connect} from "react-redux";

export class HomePage extends Component {

    componentDidMount() {
        this.props.getCategories();
    }


    render() {
        let categories = this.props.categories;
        return (
            <div className="container">
                {categories && categories.map((category, index) => {
                    return (
                        <div key={index}>
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
    getCategories: () => dispatch(fetchGetCategories())
});


HomePage.propTypes = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)