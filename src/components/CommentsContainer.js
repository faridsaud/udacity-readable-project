/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import OrderForm from "./OrderForm";
import Comment from "./Comment";
import CreateComment from "./CreateComment";


class CommentsContainer extends Component {
    state = {
        isCreateCommentOpen: false
    };

    createCommentOnClickHandler = () => {
        this.setState((prevState) => {
            let newState = prevState;
            newState.isCreateCommentOpen = !newState.isCreateCommentOpen
            return newState;
        })
    };

    render() {
        return (
            <div className="card">
                <h4 className="card-header">
                    <div className="row">
                        <div className="col-md-8">
                            Comments
                        </div>
                        <div className="col-md-2">
                            <OrderForm/>
                        </div>
                        <div className="col-md-2">
                            <div className="btn-group float-right" role="group">
                                <button type="button" className="btn btn-primary btn-sm"
                                        onClick={this.createCommentOnClickHandler}><i className="material-icons">add</i></button>
                            </div>
                        </div>
                    </div>
                </h4>
                <div className="card-body">
                    {this.state.isCreateCommentOpen === true &&
                        <div>
                            <CreateComment/>
                            <br/>
                        </div>
                    }
                    <Comment/>

                </div>
            </div>


        )
    }
}

CommentsContainer.propTypes = {};
export default CommentsContainer;