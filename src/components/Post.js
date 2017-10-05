/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import TimeAgo from "react-timeago";
import PropTypes from 'prop-types';

class Post extends Component {

    render() {
        let post = this.props.post;
        return (

            <div className="card">

                <div className="card-body">
                    <Link to="/post/detail/123" className="card-title">
                        <h5>{post.title}</h5>
                    </Link>
                    <p className="card-text">{post.body}</p>

                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-2 float-">
                            <div className="btn-group-vertical btn-group-sm">
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons">keyboard_arrow_up</i></button>
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons">keyboard_arrow_down</i></button>
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

Post.propTypes = {
    post:PropTypes.object.isRequired
};
export default Post;