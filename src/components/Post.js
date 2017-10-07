/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import TimeAgo from "react-timeago";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchDeletePost, fetchDownVotePost, fetchUpVotePost} from "../actions/Post";

class Post extends Component {

    upVoteOnClickHandler = (event) =>{
        event.preventDefault();
        this.props.upVotePost(this.props.post.id)
    };


    downVoteOnClickHandler = (event) =>{
        event.preventDefault();
        this.props.downVotePost(this.props.post.id)
    };

    deletePostOnClickHandler = () =>{
        this.props.deletePost(this.props.post.id)
    }


    render() {
        let post = this.props.post;
        return (

            <div className="card">
                <div className="card-body">
                    <Link to={"/post/detail/" + post.id} className="card-title">
                        <h5>{post.title}</h5>
                    </Link>
                    <p className="card-text">{post.body}</p>
                    {
                        this.props.isDeleteEnabled && (
                            <Link to={"/"} type="button" className="btn btn-danger btn-sm float-right"><i
                                className="material-icons" onClick={this.deletePostOnClickHandler}>delete</i>
                            </Link>
                        )
                    }
                    {
                        this.props.isEditEnabled && (
                            <Link to={"/post/update/"} className="btn btn-primary btn-sm float-right"><i
                                className="material-icons">mode_edit</i>
                            </Link>
                        )
                    }


                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-2 float-">
                            <div className="btn-group-vertical btn-group-sm">
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons" onClick={this.upVoteOnClickHandler}>keyboard_arrow_up</i></button>
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons" onClick={this.downVoteOnClickHandler}>keyboard_arrow_down</i></button>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p>
                                Author: {post.author} <br/>
                                Created: <TimeAgo date={new Date(post.timestamp)}/> <br/>
                                Votes: {post.voteScore}
                                </p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

const mapDispatchToProps = dispatch => ({
    upVotePost: (postId) => dispatch(fetchUpVotePost(postId)),
    downVotePost: (postId) => dispatch(fetchDownVotePost(postId)),
    deletePost: (postId) => dispatch(fetchDeletePost(postId))
});




export default connect(
    null,
    mapDispatchToProps
)(Post)