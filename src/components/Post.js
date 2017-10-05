/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import TimeAgo from 'react-timeago'

class Post extends Component {

    render() {
        let post =  this.props.post;
        return (

            <div className="card">

                <div className="card-body">
                    <Link to="/post/detail/123" className="card-title">
                        <h5>{post.title}</h5>
                    </Link>
                    <p className="card-text">{post.body}</p>
                    <button type="button" className="btn btn-light btn-sm float-left"><i className="material-icons">thumb_up</i>
                    </button>
                </div>
                <div className="card-footer">
                    <div className="float-right">
                        <p>{post.author} - <TimeAgo date={new Date(post.timestamp)}/></p>
                    </div>
                </div>
            </div>


        )
    }
}

Post.propTypes = {};
export default Post;