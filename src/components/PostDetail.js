/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Link from "react-router-dom/es/Link";
import CommentsContainer from "./CommentsContainer";
import Post from "./Post";
import {connect} from "react-redux";
import * as API from "../utils/Api";
import {fetchGetAllComentsByPost} from "../actions/Comment";
import {fetchPostDetail} from "../actions/Post";


class PostDetail extends Component {

    state = {
        post: {}
    };

    componentDidMount() {
        this.props.getPostDetail(this.props.match.params.id);
        this.props.getAllComentsByPost(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.post) {
            this.setState({
                post: newProps.post
            })
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.post.id && (
                        <div className="container">
                            <Post post={this.state.post} isEditEnabled={true} isDeleteEnabled={true}/>
                            <br/>
                            {
                                this.props.comments && (
                                    <CommentsContainer comments={this.props.comments} post={this.state.post}/>
                                )
                            }
                        </div>
                    )
                }

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        comments: state.comment.comments.filter(comment => comment.parentId === props.match.params.id && !comment.deleted),
        post: state.post.posts.filter(post => post.id === props.match.params.id)[0]
    }
};

const mapDispatchToProps = dispatch => ({
    getPostDetail: (postId) => dispatch(fetchPostDetail(postId)),
    getAllComentsByPost: (postId) => dispatch(fetchGetAllComentsByPost(postId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)

PostDetail.propTypes = {};
