/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import TimeAgo from "react-timeago";


export class Comment extends Component {

    state = {
        isEditable: false
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
                        <p>
                            {comment.body}
                        </p>
                    )}
                    <button type="button" className="btn btn-danger btn-sm float-right"><i className="material-icons">delete</i>
                    </button>
                    <button type="button" className="btn btn-primary btn-sm float-right"
                            onClick={this.editOnClickHandler}><i className="material-icons">mode_edit</i>
                    </button>
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
                                Author: {comment.author} <br/>
                                Created: <TimeAgo date={new Date(comment.timestamp)}/> <br/>
                                Votes: {comment.voteScore}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

Comment.propTypes = {};

const mapStateToProps = (state, props) => ({
    comments: state.comments,
    posts: state.posts

});

export default connect(
    mapStateToProps
)(Comment)
