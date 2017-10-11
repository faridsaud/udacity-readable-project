/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import OrderForm from "./OrderForm";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import PropTypes from 'prop-types';


class CommentsContainer extends Component {
    state = {
        isCreateCommentOpen: false,
        comments: []
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            comments: nextProps.comments
        });
    }

    createCommentOnClickHandler = () => {
        this.setState((prevState) => {
            let newState = prevState;
            newState.isCreateCommentOpen = !newState.isCreateCommentOpen
            return newState;
        })
    };

    updateCommentsOrder = ({by, desc}) => {
        let commentsOrdered = this.state.comments;
        if (by === "date" && desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.timestamp > commentB.timestamp)
                    return -1;
                else
                    return 1;
            })
        }
        if (by === "date" && !desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.timestamp < commentB.timestamp)
                    return -1;
                else
                    return 1;
            })
        }
        if (by === "rate" && !desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.voteScore < commentB.voteScore)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "rate" && desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.voteScore > commentB.voteScore)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "author" && !desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.author < commentB.author)
                    return -1;
                else
                    return 1;
            })
        }

        if (by === "author" && desc) {
            commentsOrdered = this.state.comments.sort((commentA, commentB) => {
                if (commentA.author > commentB.author)
                    return -1;
                else
                    return 1;
            })
        }


        this.setState({
            comments: commentsOrdered
        })
    };

    render() {
        return (
            <div className="card">
                <h4 className="card-header">
                    <div className="row">
                        <div className="col-md-7">
                            Comments
                        </div>
                        <div className="col-md-3">
                            <OrderForm updateOrder={this.updateCommentsOrder}/>
                        </div>
                        <div className="col-md-2">
                            <div className="btn-group float-right" role="group">
                                <button type="button" className="btn btn-primary btn-sm"
                                        onClick={this.createCommentOnClickHandler}><i className="material-icons">add</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </h4>
                <div className="card-body">
                    {this.state.isCreateCommentOpen === true &&
                    <div>
                        <CreateComment parentId={this.props.post.id}/>
                        <br/>
                    </div>
                    }
                    {
                        this.state.comments && (
                            this.state.comments.map((comment, index) => {
                                    return (
                                        <div key={index}>
                                            <Comment comment={comment} isEditEnabled={true} isDeleteEnabled={true}/>
                                            <br/>
                                        </div>
                                    )
                                }
                            )
                        )
                    }

                </div>
            </div>


        )
    }
}

CommentsContainer.propTypes = {
    post: PropTypes.object.isRequired
};
export default CommentsContainer;