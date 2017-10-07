/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import TimeAgo from "react-timeago";
import {connect} from "react-redux";
import {fetchDownVoteComment, fetchUpVoteComment} from "../actions/Comment";

class Comment extends Component {

    state = {
        isEditable: false
    };

    upVoteOnClickHandler = (event) => {
        event.preventDefault();
        this.props.upVoteComment(this.props.comment.id);
    };

    downVoteOnClickHandler = (event) => {
        event.preventDefault();
        this.props.downVoteComment(this.props.comment.id);
    };

    editOnClickHandler = () => {
        this.setState((prevState) => ({
            isEditable: !prevState.isEditable
        }))
    };

    componentDidMount() {
        console.log("Props COMMENT:", this.props);
    }

    render() {
        let comment = this.props.comment;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-1">
                            <div className="btn-group-vertical btn-group-sm">
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons" onClick={this.upVoteOnClickHandler}>keyboard_arrow_up</i>
                                </button>
                                <button type="button" className="btn btn-dark btn-sm float-left"><i
                                    className="material-icons"
                                    onClick={this.downVoteOnClickHandler}>keyboard_arrow_down</i></button>
                            </div>
                        </div>
                        <div className="col-md-11">
                            <div className="row">
                                <div className="col-md-12">

                                    {this.state.isEditable === true ? (
                                        <div>
                                            <div className="form-group row">
                                                <div className="col-sm-12">
                                    <textarea type="text" className="form-control" id="body"
                                              placeholder="Enter your comment text here" value={comment.body}/>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                            <br/>
                                        </div>

                                    ) : (
                                        <div>
                                            <p>
                                                {comment.body}
                                            </p>

                                        </div>

                                    )}
                                </div>
                                <div className="col-md-9">
                                    <br/>
                                    <p className="small">
                                        Author: {comment.author} - Created: <TimeAgo
                                        date={new Date(comment.timestamp)}/> <br/>
                                        Votes: {comment.voteScore}
                                    </p>
                                </div>
                                <div className="col-md-3">

                                    {
                                        this.props.isDeleteEnabled && (
                                            <button type="button" className="btn btn-danger btn-sm float-right"><i
                                                className="material-icons">delete</i>
                                            </button>
                                        )
                                    }
                                    {
                                        this.props.isEditEnabled && (
                                            <button type="button" className="btn btn-primary btn-sm float-right"
                                                    onClick={this.editOnClickHandler}><i className="material-icons">mode_edit</i>
                                            </button>
                                        )
                                    }
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>


        )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.comments,
    posts: state.posts

});

const mapDispatchToProps = (dispatch) => ({
    upVoteComment: (commentId) => dispatch(fetchUpVoteComment(commentId)),
    downVoteComment: (commentId) => dispatch(fetchDownVoteComment(commentId))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment)