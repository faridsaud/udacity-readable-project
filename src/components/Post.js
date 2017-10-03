/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


class Post extends Component {

    render() {
        let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
        let displayText = text.substring(0, 99);
        return (

            <div className="card">

                <div className="card-body">
                    <Link to="/post/detail/123" className="card-title">
                        <h5>Post 1 title</h5>
                    </Link>
                    <p className="card-text">{displayText}..</p>
                    <button type="button" className="btn btn-light btn-sm float-right"><i className="material-icons">thumb_up</i>
                    </button>
                </div>
                <div className="card-footer text-muted">
                    <p>By Farid Saud - 2 days ago</p>
                </div>
            </div>


        )
    }
}

Post.propTypes = {};
export default Post;