/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Comment extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    This is some text within a card block.
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

Comment.propTypes = {};
export default Comment;