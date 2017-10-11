/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import CommentsContainer from "./CommentsContainer";
import Post from "./Post";
import {connect} from "react-redux";
import {fetchPostDetail} from "../actions/Post";


class PostDetail extends Component {

    state = {
        post: {}
    };

    componentDidMount() {
        this.props.getPostDetail(this.props.match.params.id);
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
    let comments = state.comment.comments.filter(comment => comment.parentId === props.match.params.id && !comment.deleted);
    comments.sort((commentA, commentB) => {
        if (commentA.voteScore > commentB.voteScore)
            return -1;
        else
            return 1
    });
    return {
        comments: comments,
        post: state.post.posts.filter(post => post.id === props.match.params.id)[0]
    }
};

const mapDispatchToProps = dispatch => ({
    getPostDetail: (postId) => dispatch(fetchPostDetail(postId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)

PostDetail.propTypes = {};
