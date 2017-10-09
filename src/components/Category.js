/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryBody from "./CategoryBody";
import {connect} from "react-redux";
import {fetchGetPostByCategory} from "../actions/Post";
import PropTypes from "prop-types";


class Category extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        this.props.getPostsByCategory(this.props.name);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            posts: nextProps.posts
        });
    }


    updatePostsOrder = ({by, desc}) => {
        let postsOrdered = this.state.posts;
        if (by === "date" && desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.timestamp > postB.timestamp)
                    return -1;
                else
                    return 1;
            })
        }
        if (by === "date" && !desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.timestamp < postB.timestamp)
                    return -1;
                else
                    return 1;
            })
        }
        if (by === "rate" && !desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.voteScore < postB.voteScore)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "rate" && desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.voteScore > postB.voteScore)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "author" && desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.author > postB.author)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "author" && !desc) {
            postsOrdered = this.state.posts.sort((postA, postB) => {
                if (postA.author < postB.author)
                    return -1;
                else
                    return 1;
            })
        }


        this.setState({
            posts: postsOrdered
        })
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CategoryHeader name={this.props.name} updatePostsOrder={this.updatePostsOrder}/>
                        {
                            this.state.posts.length > 0 && (
                                <CategoryBody posts={this.state.posts}/>
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
    let posts = state.post.posts.filter(post => post.category === props.name && !post.deleted);
    posts.sort((postA, postB) => {
        if (postA.voteScore > postB.voteScore)
            return -1;
        else
            return 1
    });
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