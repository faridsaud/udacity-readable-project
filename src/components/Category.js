/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryBody from "./CategoryBody";
import {connect} from "react-redux";
import {fetchGetPostByCategory} from "../actions/Post";
import PropTypes from 'prop-types';


export class Category extends Component {

    componentDidMount() {
        this.props.getPostsByCategory(this.props.name);
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CategoryHeader name={this.props.name}/>
                        {
                            this.props.posts.length>0 && (
                                <CategoryBody posts={this.props.posts}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Category.propTypes = {
    name: PropTypes.string.isRequired
};


const mapStateToProps = (state, props) => {
    let posts =  state.post.posts.filter(post=>post.category===props.name);
    return {
        posts
    }
};

const mapDispatchToProps = dispatch => ({
    getPostsByCategory: (categoryName) => dispatch(fetchGetPostByCategory(categoryName))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)